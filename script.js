let startTime;
let timerInterval;
let isStarted = false;

function startTest() {

    if (!isStarted) {
        startTime = new Date();
        isStarted = true;

        timerInterval = setInterval(updateTime, 1000);
    }

    calculateResults();
}

function updateTime() {
    let currentTime = new Date();
    let seconds = Math.floor((currentTime - startTime) / 1000);
    document.getElementById("time").innerText = seconds;
}

function calculateResults() {

    let text = document.getElementById("text").innerText;
    let input = document.getElementById("input").value;

    let wordsTyped = input.trim().split(" ").length;

    let time = (new Date() - startTime) / 60000;

    let wpm = Math.round(wordsTyped / time);

    document.getElementById("wpm").innerText = wpm || 0;

    let correctChars = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === text[i]) {
            correctChars++;
        }
    }

    let accuracy = Math.round((correctChars / input.length) * 100);

    document.getElementById("accuracy").innerText = accuracy || 0;
}

function restart() {

    clearInterval(timerInterval);

    document.getElementById("input").value = "";

    document.getElementById("time").innerText = 0;
    document.getElementById("wpm").innerText = 0;
    document.getElementById("accuracy").innerText = 0;

    isStarted = false;
}
