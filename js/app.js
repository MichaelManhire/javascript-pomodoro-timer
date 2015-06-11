var timer = document.getElementById("timer"),
    button = document.getElementById("button"),
    sound = new Audio("mp3/sound.mp3"),
    numOfPomodoros = 0;

// Variables for the Countdown to Work:
var mins = 25,
    secs = mins * 60,
    currentSecs = 0,
    currentMins = 0,
    comingOffBreak = false;

function resetCountdown() {
    // For new pomodoro
    mins = 25;
    secs = mins * 60;
    currentSecs = 0;
    currentMins = 0;
    comingOffBreak = false;
};

function resetForShortBreak() {
    mins = 5;
    secs = mins * 60;
    currentSecs = 0;
    currentMins = 0;
    comingOffBreak = true;
}

function resetForLongBreak() {
    mins = 30;
    secs = mins * 60;
    currentSecs = 0;
    currentMins = 0;
    comingOffBreak = true;
}