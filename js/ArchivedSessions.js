import Chart from 'chart.js/auto';

// Function to format session duration
function formatDuration(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}

function displaySessions(sessions) {
    const sessionsContainer = document.getElementById('sessionsContainer');
    sessionsContainer.innerHTML = ''; // Clear existing sessions

    sessions.forEach(session => {
        const sessionElement = document.createElement('div');
        sessionElement.className = 'session';
        sessionElement.innerHTML = `
            <div class="sessionTopic">${session.studyTopic}</div>
            <div class="sessionDuration">${formatDuration(session.duration)}</div>
            <div class="sessionOffTopicCount">Off-topic visits: ${session.offTopicCount || '0'}</div>
            `;
        sessionsContainer.prepend(sessionElement); // Add new session to the top
    });
}

function renderChart(sessions) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const labels = sessions.map(session => session.studyTopic);
    const offTopicCounts = sessions.map(session => session.offTopicCount);
    
    // Determine the day of the week and assign colors
    const backgroundColors = sessions.map(session => {
        const sessionDate = new Date(session.date); // Assuming 'date' is a property of 'session'
        const dayOfWeek = sessionDate.getDay();
        const colors = [
            'rgba(255, 99, 132, 0.2)',  // Sunday - Red
            'rgba(54, 162, 235, 0.2)',  // Monday - Blue
            'rgba(255, 206, 86, 0.2)',  // Tuesday - Yellow
            'rgba(75, 192, 192, 0.2)',  // Wednesday - Teal
            'rgba(153, 102, 255, 0.2)', // Thursday - Purple
            'rgba(255, 159, 64, 0.2)',  // Friday - Orange
            'rgba(201, 203, 207, 0.2)'  // Saturday - Gray
        ];
        return colors[dayOfWeek];
    });

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Off-topic Visits',
                data: offTopicCounts,
                backgroundColor: backgroundColors, // Apply the dynamic colors
                borderColor: 'rgba(220, 220, 220, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('goBack').addEventListener('click', function() {
        window.location.href = '../html/interface.html'; // Navigate back to the main page
    });

    // Retrieve and display archived sessions
    chrome.storage.local.get(['archivedSessions'], function(result) {
        if (result.archivedSessions && result.archivedSessions.length) {
            displaySessions(result.archivedSessions);
            renderChart(result.archivedSessions);
        }
    });
});
