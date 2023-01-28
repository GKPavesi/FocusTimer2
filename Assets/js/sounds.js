function Sounds() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

    const florestSound = new Audio("./Assets/sounds/Floresta.wav");
    const rainSound = new Audio("./Assets/sounds/Chuva.wav");
    const coffeeShopSound = new Audio("./Assets/sounds/Cafeteria.wav");
    const firePlaceSound = new Audio("./Assets/sounds/Lareira.wav")

    florestSound.loop = true;
    rainSound.loop = true;
    coffeeShopSound.loop = true;
    firePlaceSound.loop = true;

    function pressButton() {
        buttonPressAudio.play();
    }

    function timeEnd() {
        kitchenTimer.play();
    }

    return {
        pressButton
    }
}

export { Sounds }