const playButton = document.querySelector("#play");
const stopButton = document.querySelector("#stop");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const florestButton = document.querySelector('#florestButton');
const rainButton = document.querySelector('#rainButton');
const coffeeShopButton = document.querySelector('#coffeeShopButton');
const firePlaceButton = document.querySelector('#firePlaceButton');
const soundButtons = document.querySelectorAll('.soundButton');
let timerTimeOut = 0;
let isCountDownInactive = true;

playButton.addEventListener('click', handlePlayButton);
stopButton.addEventListener('click', handleStopButton);
plusButton.addEventListener('click', handlePlusButton);
minusButton.addEventListener('click', handleMinusButton);
florestButton.addEventListener('click', handleFlorestButton);
rainButton.addEventListener('click', handleRainButton);
coffeeShopButton.addEventListener('click', handleCoffeeShopButton);
firePlaceButton.addEventListener('click', handleFirePlaceButton);

function handlePlayButton() {
    if (isCountDownInactive) {
        countdown();
    }
}

function countdown() {
    isCountDownInactive = false;
    timerTimeOut = setTimeout(() => {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);
        let noTimeLeft = ((seconds == 0) && (minutes == 0));
        let updateMinutes = seconds == 0;

        if (noTimeLeft) {
            isCountDownInactive = true;
            return
        }

        if (updateMinutes) {
            seconds = 60
            minutes = minutes -1;
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
        minutesDisplay.textContent = String(minutes).padStart(2, "0");
        countdown();
    }, 100)
}

function handleStopButton() {
    clearTimeout(timerTimeOut);
    isCountDownInactive = true;
}

function handlePlusButton() {
    let currentMinutes = Number(minutesDisplay.textContent);
    let isNotANumber = isNaN(currentMinutes);

    if (isNotANumber) {
        alert("Os minutos têm que ser um número")
        location.reload();
        return;
    } 

    minutesDisplay.textContent = String(currentMinutes += 5).padStart(2, "0");
}

function handleMinusButton() {
    let currentMinutes = Number(minutesDisplay.textContent);
    let isNotANumber = isNaN(currentMinutes);
    let isResultPositive = currentMinutes >= 5;

    if (isNotANumber) {
        alert("Os minutos têm que ser um número")
        location.reload();
        return;
    }

    isResultPositive ? currentMinutes -= 5 : currentMinutes = 0;

    minutesDisplay.textContent = String(currentMinutes).padStart(2, "0");
}

function handleFlorestButton() {
    disableAllSoundButtons();
    florestButton.classList.add("selected");
}


function handleRainButton() {
    disableAllSoundButtons();
    rainButton.classList.add("selected");
}

function handleCoffeeShopButton() {
    disableAllSoundButtons();
    coffeeShopButton.classList.add("selected");
}

function handleFirePlaceButton() {
    disableAllSoundButtons();
    firePlaceButton.classList.add("selected");
}

function disableAllSoundButtons() {
    soundButtons.forEach(function (element) {
        element.classList.remove("selected")
    })
}