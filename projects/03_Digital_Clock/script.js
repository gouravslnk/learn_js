let is24Hour = true;
let currentTimezone = 'local';
let isDarkTheme = true;

const clock = document.getElementById('clock');
const dateElement = document.getElementById('date');
const secondsElement = document.getElementById('seconds');
const formatBtn = document.getElementById('format-btn');
const themeBtn = document.getElementById('theme-btn');
const timezoneSelect = document.getElementById('timezone');

// Update clock every second
function updateClock() {
    const now = new Date();
    let displayTime;
    
    // Handle timezone
    if (currentTimezone === 'local') {
        displayTime = now;
    } else {
        displayTime = new Date(now.toLocaleString("en-US", {timeZone: currentTimezone}));
    }
    
    // Format time based on 12/24 hour preference
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !is24Hour
    };
    
    if (currentTimezone !== 'local') {
        timeOptions.timeZone = currentTimezone;
    }
    
    // Display main time with seconds
    const timeString = displayTime.toLocaleTimeString('en-US', timeOptions);
    clock.innerHTML = timeString;
    
    // Hide the separate seconds display since it's now in main clock
    secondsElement.style.display = 'none';
    
    // Display date
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    if (currentTimezone !== 'local') {
        dateOptions.timeZone = currentTimezone;
    }
    
    const dateString = displayTime.toLocaleDateString('en-US', dateOptions);
    dateElement.innerHTML = dateString;
}

// Toggle between 12/24 hour format
function toggleFormat() {
    is24Hour = !is24Hour;
    formatBtn.textContent = is24Hour ? '24 Hour' : '12 Hour';
    formatBtn.classList.toggle('active');
    updateClock();
}

// Change timezone
function changeTimezone() {
    currentTimezone = timezoneSelect.value;
    updateClock();
    
    // Update banner text
    const banner = document.getElementById('banner');
    if (currentTimezone === 'local') {
        banner.textContent = 'Digital Clock - Local Time';
    } else {
        const selectedOption = timezoneSelect.options[timezoneSelect.selectedIndex];
        banner.textContent = `Digital Clock - ${selectedOption.text}`;
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'f':
        case 'F':
            toggleFormat();
            break;
        case 't':
        case 'T':
            toggleTheme();
            break;
        case 'Escape':
            // Reset to defaults
            is24Hour = true;
            currentTimezone = 'local';
            timezoneSelect.value = 'local';
            formatBtn.textContent = '24 Hour';
            formatBtn.classList.add('active');
            document.getElementById('banner').textContent = 'Digital Clock';
            updateClock();
            break;
    }
});

// Initialize clock
function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
    
    // Show helpful hint
    setTimeout(() => {
        console.log('Keyboard Shortcuts: F = Format, T = Theme, ESC = Reset');
    }, 2000);
}

// Start the clock when page loads
document.addEventListener('DOMContentLoaded', initClock);
