let seconds = 10;
let prep = true;
let speak = false;

document.addEventListener('DOMContentLoaded', function() {
    updateTimer();
});

function count() {
    if (seconds > 0) {
        seconds--;
        updateTimer();
    }
}

function updateTimer() {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    mins = ("00" + mins).slice(-2);
    secs = ("00" + secs).slice(-2);
    document.querySelector('#timer').innerHTML = mins + ":" + secs;
}

function startTimer() {
    setInterval(count, 1000);
}