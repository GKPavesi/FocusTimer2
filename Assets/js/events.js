import { playButton, stopButton, plusButton, minusButton, minutesDisplay, florestButton, rainButton, coffeeShopButton, firePlaceButton, soundButtons, secondsDisplay } from './elements.js';

function Events({ sounds, timer }) {
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
        timer.startCountDown();
    }



    function handleStopButton() {
        sounds.pressButton();
        timer.hold();
    }

    function handlePlusButton() {
        sounds.pressButton();
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
        sounds.pressButton();
        let currentMinutes = Number(minutesDisplay.textContent);
        let isNotANumber = isNaN(currentMinutes);
        let updatedMinutes = currentMinutes - 5;
        let isResultLessThanFive = ((updatedMinutes) >= 5) ? false : true;

        if (isNotANumber) {
            alert("Os minutos têm que ser um número")
            location.reload();
            return;
        }

        if (isResultLessThanFive) {
            alert("Você não pode deixar os minutos abaixo de 5");
            updatedMinutes = 5;
            secondsDisplay.textContent = String("00");
        }

        minutesDisplay.textContent = String(updatedMinutes).padStart(2, "0");

    }

    function handleFlorestButton() {
        sounds.pressButton();
        if (florestButton.classList.contains("selected")) {
            return
        }
        disableAllSoundButtons();
        disableAllSounds();
        florestButton.classList.add("selected");
        sounds.florestSoundStart();
    }


    function handleRainButton() {
        sounds.pressButton();
        if (rainButton.classList.contains("selected")) {
            return
        }
        disableAllSoundButtons();
        disableAllSounds();
        rainButton.classList.add("selected");
        sounds.rainSoundStart();
    }

    function handleCoffeeShopButton() {
        sounds.pressButton();
        if (coffeeShopButton.classList.contains("selected")) {
            return
        }
        disableAllSoundButtons();
        disableAllSounds();
        coffeeShopButton.classList.add("selected");
        sounds.coffeeShopSoundStart();
    }

    function handleFirePlaceButton() {
        sounds.pressButton();
        if (firePlaceButton.classList.contains("selected")) {
            return
        }
        disableAllSoundButtons();
        disableAllSounds();
        firePlaceButton.classList.add("selected");
        sounds.firePlaceSoundStart();
    }

    function disableAllSoundButtons() {
        sounds.pressButton();
        soundButtons.forEach(function (element) {
            element.classList.remove("selected")
        })
    }

    function disableAllSounds() {
        sounds.soundsArray.forEach(function(element) {
            element.pause();
        })
    }
}

export { Events }