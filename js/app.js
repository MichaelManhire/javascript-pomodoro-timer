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

function startCountdown() {
    setTimeout(countdown, 1000);
}

function countdown() {
    
    currentMins = Math.floor(secs / 60);
    currentSecs = secs % 60;
    
    if (currentSecs <= 9) {
        // Add an extra zero to the seconds in order to make it look more like a clock
        currentSecs = "0" + currentSecs;
    }
    
    secs--;
    
    timer.textContent = currentMins + ":" + currentSecs;
    
}

function countNumOfPomodoros() {
    // Add 1 to numOfPomodoros after each pomodoro is completed
    numOfPomodoros++;
    return numOfPomodoros;
}

function resetCountdown() {
    // For new pomodoro
    mins = 25;
    secs = mins * 60;
    currentSecs = 0;
    currentMins = 0;
    comingOffBreak = false;
}

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