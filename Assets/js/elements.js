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
const lightModeButton = document.querySelector('#lightModeButton')
const darkModeButton = document.querySelector('#darkModeButton')
const soundButtons = document.querySelectorAll('.soundButton');
const controlButtons = document.querySelectorAll('.controlButton');
const bodyElement = document.querySelector('body');
const timeElements = document.querySelector('.time');
const florestSoundControl = document.querySelector('#florestSoundControl');
const rainSoundControl = document.querySelector('#rainSoundControl');
const coffeeShopSoundControl = document.querySelector('#coffeeShopSoundControl');
const firePlaceSoundControl = document.querySelector('#firePlaceSoundControl');
const soundControls = document.querySelectorAll('.volume-control');

export { playButton, stopButton, plusButton, minusButton, minutesDisplay, secondsDisplay, florestButton, rainButton, coffeeShopButton, firePlaceButton, soundButtons, lightModeButton, darkModeButton, controlButtons, bodyElement, timeElements, florestSoundControl, rainSoundControl, coffeeShopSoundControl, firePlaceSoundControl, soundControls }