document.addEventListener('DOMContentLoaded', function() {
    const startSessionBtn = document.getElementById('startSession');
    const endSessionBtn = document.getElementById('endSession');
    const studyTopicInput = document.getElementById('studyTopic');
    const sessionDurationDisplay = document.getElementById('sessionDuration');
    const intervalSpan = document.getElementById('intervalSpan'); // Assuming existence for goal interface
    const suggestedLinksContainer = document.getElementById('suggestedLinks'); // Assuming existence for suggested links
    let timerInterval;

    document.getElementById('goBack').addEventListener('click', function() {
        window.location.href = '../html/interface.html'; // Navigate back to the main page
    });

    function updateTimerDisplay(startTime) {
        const elapsed = Date.now() - startTime;
        const hours = Math.floor(elapsed / 3600000);
        const minutes = Math.floor((elapsed % 3600000) / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        sessionDurationDisplay.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }

    // Function to display suggested links
    function displaySuggestedLinks(links) {
        suggestedLinksContainer.innerHTML = ''; // Clear links
        links.forEach(link => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;
            suggestedLinksContainer.appendChild(listItem);
        });
    }

    // display saved suggested links on popup load
    chrome.storage.local.get(['suggestedLinks'], function(result) {
        if (result.suggestedLinks && result.suggestedLinks.length > 0) {
            displaySuggestedLinks(result.suggestedLinks);
        } else {
            console.log('No suggested links found in storage.');
        }
    });

    chrome.storage.local.get(['isSessionActive', 'sessionStartTime', 'studyTopic', 'breakInterval'], function(result) {
    if (result.isSessionActive && result.sessionStartTime) {
        // Update display based on sessionStartTime
        updateTimerDisplay(result.sessionStartTime);
        startSessionBtn.style.display = 'none';
        endSessionBtn.style.display = 'inline-block';
        studyTopicInput.value = result.studyTopic || '';
        // Correctly calculate elapsed time every second
        timerInterval = setInterval(() => updateTimerDisplay(result.sessionStartTime), 1000);
    }
    intervalSpan.textContent = result.breakInterval ? `${result.breakInterval} minutes` : 'Not set';
});

    startSessionBtn.addEventListener('click', () => {
        const studyTopic = studyTopicInput.value.trim();
        if (studyTopic) {
            const startTime = Date.now();
            chrome.storage.local.set({isSessionActive: true, startTime: startTime, studyTopic: studyTopic});
            chrome.runtime.sendMessage({action: "startSession", topic: studyTopic, startTime: startTime}, () => {
                startSessionBtn.style.display = 'none';
                endSessionBtn.style.display = 'inline-block';
                timerInterval = setInterval(() => updateTimerDisplay(startTime), 1000);

                // display suggested links based on the study topic
                chrome.runtime.sendMessage({action: "getSuggestedLinks", topic: studyTopic}, function(response) {
                    displaySuggestedLinks(response.links);
                });
            });
        } else {
            alert("Please enter a study topic.");
        }
    });

    endSessionBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
    
        const endTime = Date.now();
    
        chrome.storage.local.get(['sessionStartTime'], function(result) {
            if (result.sessionStartTime) {
                const sessionDuration = endTime - result.sessionStartTime;
    
                updateGoals(sessionDuration, function() {
                    chrome.runtime.sendMessage({
                        action: "endSession",
                        topic: studyTopicInput.value.trim() || 'Unknown Topic'
                    }, function(response) {
                        // Check for any error response from background
                        if (response && response.error) {
                            console.error("Error ending session:", response.message);
                            return;
                        }
    
                        clearSessionUIAndData();
                    });
                });
            } else {
                console.error("Session start time not found.");
            }
        });
    
        chrome.storage.local.remove(['suggestedLinks'], function() {
            console.log("Suggested links cleared from storage.");
            suggestedLinksContainer.innerHTML = ''; 
        });    
    });
    
    function updateGoals(sessionDuration, callback) {
        const sessionDurationHours = sessionDuration / (3600 * 1000); // Convert milliseconds to hours
    
        // Fetch the current goal data
        chrome.storage.local.get(['dailyStudyDuration', 'weeklyStudyDuration', 'lastSessionDate'], function(data) {
            const today = new Date().toDateString();
            let dailyStudyDuration = data.dailyStudyDuration || 0;
            let weeklyStudyDuration = data.weeklyStudyDuration || 0;
            let lastSessionDate = data.lastSessionDate;
    
            // Check if the last session date is today; if not, reset dailyStudyDuration
            if (lastSessionDate !== today) {
                dailyStudyDuration = 0; // Reset daily goal if it's a new day
            }
    
            // Update the daily and weekly study durations with the latest session
            dailyStudyDuration += sessionDurationHours;
            weeklyStudyDuration += sessionDurationHours; // Assuming weeklyStudyDuration accumulates throughout the week
    
            // Save the updated goal data
            chrome.storage.local.set({
                dailyStudyDuration: dailyStudyDuration,
                weeklyStudyDuration: weeklyStudyDuration,
                lastSessionDate: today
            }, function() {
                if (chrome.runtime.lastError) {
                    console.error("Error updating goals:", chrome.runtime.lastError);
                } else {
                    console.log("Goals updated successfully.");
    
                    // Trigger any UI updates or further actions
                    if (typeof callback === "function") {
                        callback();
                    }
                }
            });
        });
    }    
    
    function clearSessionUIAndData() {
        sessionDurationDisplay.textContent = '0h 0m 0s';
        endSessionBtn.style.display = 'none';
        startSessionBtn.style.display = 'inline-block';
        studyTopicInput.value = "";
    
        // Additional cleanup in local storage as needed
        chrome.storage.local.remove(['sessionStartTime', 'isSessionActive', 'studyTopic'], () => {
            console.log("Session data cleared.");
        });
    }
});    