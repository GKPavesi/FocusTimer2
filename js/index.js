const playButton = document.querySelector("#play");
const stopButton = document.querySelector("#stop");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");


playButton.addEventListener('click', handlePlayButton);
stopButton.addEventListener('click', handleStopButton);
plusButton.addEventListener('click', handlePlusButton);
minusButton.addEventListener('click', handleMinusButton);


function handlePlayButton() {
    console.log(minutes.textContent)
    countdown();
}

function countdown() {
    setTimeout(() => {
        seconds.textContent = Number(seconds.textContent) - 1;
        countdown();
    }, 1000)
    // countdown();
}

function handleStopButton() {

}

function handlePlusButton() {
    let currentMinutes = Number(minutes.textContent);
    let isNumber = !isNaN(currentMinutes);

    if (isNumber) {
        currentMinutes += 5;
        minutes.textContent = currentMinutes;
    } else {
        alert("Os minutos têm que ser um número")
        location.reload();
    }
}

function handleMinusButton() {
    let currentMinutes = Number(minutes.textContent);
    let isNotANumber = isNaN(currentMinutes);
    let isResultPositive = currentMinutes >= 5;

    if (isNotANumber) {
        alert("Os minutos têm que ser um número")
        location.reload();
        return;
    }

    isResultPositive ? currentMinutes -= 5 : currentMinutes = 0;

    minutes.textContent = currentMinutes;
}
