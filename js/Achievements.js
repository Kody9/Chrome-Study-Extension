const achievements = [
  { threshold: 1, name: "Quick Starter", achieved: false },
  { threshold: 15, name: "Focused Quarter", achieved: false },
  { threshold: 30, name: "Half Hour Hero", achieved: false },
  { threshold: 60, name: "Power Hour Prodigy", achieved: false },
  { threshold: 120, name: "Dual Hour Dynamo", achieved: false },
  { threshold: 300, name: "Five-Star Streak", achieved: false },
  { threshold: 600, name: "Tenacious Ten", achieved: false }
];4

document.addEventListener('DOMContentLoaded', function() {
  calculateTotalSessionTime();
});

document.getElementById('goBack').addEventListener('click', function() {
  window.location.href = '../html/interface.html'; // Navigate back to the main page
});

function calculateTotalSessionTime() {
    chrome.storage.local.get('archivedSessions', function(result) {
        const sessions = result.archivedSessions || [];
        let totalSessionTime = 0;

        sessions.forEach(session => {
            totalSessionTime += session.duration;
        });

        const formattedTime = formatTime(totalSessionTime);
        document.getElementById('totalTimeValue').textContent = formattedTime;
        displayAchievements(totalSessionTime / 1000 / 60); // Convert ms to minutes
    });
}

function formatTime(timeInMilliseconds) {
    const minutes = Math.floor(timeInMilliseconds / (1000 * 60));
    const seconds = Math.floor((timeInMilliseconds % (1000 * 60)) / 1000);
    return `${minutes} minutes and ${seconds} seconds`;
}

function displayAchievements(totalSessionTime) {
  const listElement = document.getElementById('achievementsList');
  listElement.innerHTML = ''; // Clear existing items

  achievements.forEach(achievement => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const customLabel = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.disabled = true; // The checkbox is just visual and not interactive

    // The span will visually represent the checkbox
    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark');

    customLabel.appendChild(checkbox);
    customLabel.appendChild(checkmark);
    customLabel.appendChild(document.createTextNode(` ${achievement.name}`));

    if (totalSessionTime >= achievement.threshold) {
        achievement.achieved = true;
        checkbox.checked = true;
        li.classList.add('achieved'); // This class will be used to style the checkmark
    }

    li.appendChild(customLabel); // Append the label (which contains the checkbox and the checkmark)
    listElement.appendChild(li);
});
}
calculateTotalSessionTime();
displayAchievements(totalSessionTime);