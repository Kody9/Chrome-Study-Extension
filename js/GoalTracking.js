document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('goalTrackingForm');
    const hoursPerDayInput = document.getElementById('hoursPerDay');
    const hoursPerWeekInput = document.getElementById('hoursPerWeek');
    const goalStatusMessage = document.getElementById('goalStatusMessage');

    // Attach event listener to the "Go Back" button
    document.getElementById('goBack').addEventListener('click', function() {
        window.location.href = '../html/interface.html'; // Navigate back to the main page
    });
    
    // Load previous saved goals and session durations when reopening
    chrome.storage.local.get(['hoursPerDay', 'hoursPerWeek', 'dailyStudyDuration', 'weeklyStudyDuration'], function(data) {
        updateGoalDisplays(data); // Pass the loaded data for initial display update
    });

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "updateGoals") {
            // Assuming updateGoalDisplays() fetches the latest data and updates the UI
            chrome.storage.local.get(['hoursPerDay', 'hoursPerWeek', 'dailyStudyDuration', 'weeklyStudyDuration'], function(data) {
                updateGoalDisplays(data); // Make sure this function is designed to handle the data object directly
            });
        }
    });
    

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        saveGoals();
    });

    document.getElementById('clearGoals').addEventListener('click', clearGoals);
    document.getElementById('adjustGoals').addEventListener('click', adjustGoals);
    

    function saveGoals() {
        const hoursPerDay = hoursPerDayInput.value;
        const hoursPerWeek = hoursPerWeekInput.value;

        chrome.storage.local.set({'hoursPerDay': hoursPerDay, 'hoursPerWeek': hoursPerWeek}, function() {
            goalStatusMessage.textContent = 'Goals saved successfully.';
            updateGoalDisplays();
        });
    }
  
    function updateGoalDisplays(data) {
        // If data is not provided, retrieve current data from storage
        if (!data) {
            chrome.storage.local.get(['hoursPerDay', 'hoursPerWeek', 'dailyStudyDuration', 'weeklyStudyDuration'], function(data) {
                displayGoals(data);
            });
        } else {
            displayGoals(data);
        }
    }

    function displayGoals(data) {
        const dailyGoal = data.hoursPerDay || 0; // Expected goal in hours
        const weeklyGoal = data.hoursPerWeek || 0; // Expected goal in hours
        const dailyStudyDuration = data.dailyStudyDuration || 0; // Stored in hours
        const weeklyStudyDuration = data.weeklyStudyDuration || 0; // Stored in hours
    
        // Calculate completion percentages
        const dailyCompletionPercentage = dailyGoal > 0 ? ((dailyStudyDuration / dailyGoal) * 100).toFixed(1) : '0.0';
        const weeklyCompletionPercentage = weeklyGoal > 0 ? ((weeklyStudyDuration / weeklyGoal) * 100).toFixed(1) : '0.0';
    
        // Update UI with goals and completion percentages
        document.getElementById('dailyGoalDisplay').textContent = `Daily Goal: ${dailyGoal} Hours - ${dailyCompletionPercentage}% Complete`;
        document.getElementById('weeklyGoalDisplay').textContent = `Weekly Goal: ${weeklyGoal} Hours - ${weeklyCompletionPercentage}% Complete`;
    }

    function clearGoals() {
        chrome.storage.local.set({'hoursPerDay': 0, 'hoursPerWeek': 0, 'dailyStudyDuration': 0, 'weeklyStudyDuration': 0}, function() {
            updateGoalDisplays();
            goalStatusMessage.textContent = 'Goals cleared.';
        });
    }

    function adjustGoals() {
        const adjustmentDaily = parseInt(hoursPerDayInput.value, 10) || 0;
        const adjustmentWeekly = parseInt(hoursPerWeekInput.value, 10) || 0;

        chrome.storage.local.get(['hoursPerDay', 'hoursPerWeek'], function(data) {
            const newDaily = (parseInt(data.hoursPerDay, 10) || 0) + adjustmentDaily;
            const newWeekly = (parseInt(data.hoursPerWeek, 10) || 0) + adjustmentWeekly;

            chrome.storage.local.set({'hoursPerDay': newDaily.toString(), 'hoursPerWeek': newWeekly.toString()}, function() {
                updateGoalDisplays();
                goalStatusMessage.textContent = 'Goals adjusted successfully.';
            });
        });
    }

    window.addEventListener('focus', function() {
        chrome.storage.local.get(['hoursPerDay', 'hoursPerWeek', 'dailyStudyDuration', 'weeklyStudyDuration'], function(data) {
            updateGoalDisplays(data);
        });
    });
});


