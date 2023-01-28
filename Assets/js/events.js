import { playButton, stopButton, plusButton, minusButton, minutesDisplay, florestButton, rainButton, coffeeShopButton, firePlaceButton, soundButtons} from './elements.js';

function Events({sounds, timer, isCountDownInactive}) {
    playButton.addEventListener('click', handlePlayButton);
    stopButton.addEventListener('click', handleStopButton);
    plusButton.addEventListener('click', handlePlusButton);
    minusButton.addEventListener('click', handleMinusButton);
    florestButton.addEventListener('click', handleFlorestButton);
    rainButton.addEventListener('click', handleRainButton);
    coffeeShopButton.addEventListener('click', handleCoffeeShopButton);
    firePlaceButton.addEventListener('click', handleFirePlaceButton);

    function handlePlayButton() {
        sounds.pressButton();
        if (isCountDownInactive) {
            timer.countdown();
        }
    }



    function handleStopButton() {
        timer.hold();
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
}

export { Events }