document.addEventListener('DOMContentLoaded', function() {
    var notificationCheckbox = document.querySelector('input[type="checkbox"][class="toggle-input"]');
    
    // Ensure to get the correct checkbox if there are multiple
    notificationCheckbox = document.querySelectorAll('input[type="checkbox"][class="toggle-input"]')[1]; // Assuming it's the second checkbox

    notificationCheckbox.addEventListener('change', function() {
        chrome.runtime.sendMessage({action: "toggleReminder", enable: this.checked});
    });

    // Initialize checkbox state from storage
    chrome.storage.local.get('reminderEnabled', function(data) {
        notificationCheckbox.checked = data.reminderEnabled;
    });

    var notifSelect = document.getElementById('notifSelect');
    
    notifSelect.addEventListener('change', function() {
        var selectedValue = this.value;
        chrome.storage.local.set({ 'notificationPreference': selectedValue });
    });
    
    // Initialize select value from storage
    chrome.storage.local.get('notificationPreference', function(data) {
        notifSelect.value = data.notificationPreference || 'minute'; // Default to 'minute' if not set
    });
});

// Function to switch theme
function switchTheme(themeName) {
    const body = document.body;
    body.className = '';
    body.classList.add(themeName);
    
    // Save the selected theme to local storage for persistence
    localStorage.setItem('selectedTheme', themeName);
}

// Function to handle theme change
function handleThemeChange() {
    const selectedTheme = this.value;
    switchTheme(selectedTheme);
}

// Add event listener to the theme select element
document.addEventListener('DOMContentLoaded', function() {
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
        switchTheme(selectedTheme);
        document.getElementById('themeSelect').value = selectedTheme;
    }
    
    // Add event listener for theme change, but only if themeSelect exists (settings page)
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        themeSelect.addEventListener('change', handleThemeChange);
    }
});

document.getElementById('goBack').addEventListener('click', function() {
    window.location.href = '../html/interface.html'; // Navigate back to the main page
});
