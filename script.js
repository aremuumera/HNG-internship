// script.js
document.addEventListener("DOMContentLoaded", () => {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');

    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

        timeElement.textContent = utcTime;
        dayElement.textContent = dayOfWeek;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
