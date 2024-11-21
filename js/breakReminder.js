document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to the "Go Back" button
    document.getElementById('goBack').addEventListener('click', function() {
        window.location.href = '../html/interface.html'; // Navigate back to the main page
    });

    document.getElementById('toggleReminder').addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: "queryState" }, function(response) {
            const newState = !response.reminderEnabled;
            chrome.runtime.sendMessage({ action: "toggleReminder", enable: newState }, function(updateResponse) {
                updateButton(updateResponse.reminderEnabled);
            });
        });
    });
    

    document.getElementById('intervalForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const interval = parseInt(document.getElementById('breakInterval').value, 10);
        if (!isNaN(interval) && interval > 0) {
            chrome.runtime.sendMessage({ action: "setInterval", interval: interval }, function(response) {
                document.getElementById('currentIntervalDisplay').textContent = interval;
                document.getElementById('statusMessage').textContent = "Interval set to " + interval + " minutes.";
            });
        } else {
            document.getElementById('statusMessage').textContent = "Please enter a valid interval.";
        }
    });

    chrome.runtime.sendMessage({ action: "queryState" }, function(response) {
        if (response) {
            document.getElementById('currentIntervalDisplay').textContent = response.currentInterval;
            updateButton(response.reminderEnabled);
        }
    });

    function updateButton(reminderEnabled) {
        const button = document.getElementById('toggleReminder');
        const statusDiv = document.getElementById('reminderStatus');
        button.textContent = reminderEnabled ? "Turn Reminder OFF" : "Turn Reminder ON";
        statusDiv.textContent = `Reminder: ${reminderEnabled ? "ON" : "OFF"}`;
        button.className = reminderEnabled ? 'reminderOn' : 'reminderOff';
    }
});
