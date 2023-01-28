function Timer({ minutesDisplay, secondsDisplay, sounds }) {

    let timerTimeOut = 0;
    let isCountDownInactive = true;
    let originalMinutes = Number(minutesDisplay.textContent);
    let originalSeconds = Number(secondsDisplay.textContent);
    let isPaused = false;

    function startCountDown() {
        if (!isPaused) {
            originalMinutes = Number(minutesDisplay.textContent);
            originalSeconds = Number(secondsDisplay.textContent);
        }
        if (isCountDownInactive) {
            countdown();
        }
    }

    function countdown() {
        isPaused = false;
        isCountDownInactive = false;
        timerTimeOut = setTimeout(() => {
            let minutes = Number(minutesDisplay.textContent);
            let seconds = Number(secondsDisplay.textContent);
            let noTimeLeft = ((seconds == 0) && (minutes == 0));
            let updateMinutes = seconds == 0;

            if (noTimeLeft) {
                sounds.timeEnd();
                isCountDownInactive = true;
                resetTimer();
                return
            }

            if (updateMinutes) {
                seconds = 60
                minutes = minutes - 1;
            }

            secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
            minutesDisplay.textContent = String(minutes).padStart(2, "0");

            countdown();
        }, 1000)
    }

    function hold() {
        clearTimeout(timerTimeOut);
        isCountDownInactive = true;
        isPaused = true;
    }

    function resetTimer() {
        secondsDisplay.textContent = String(originalSeconds).padStart(2, "0");
        minutesDisplay.textContent = String(originalMinutes).padStart(2, "0");
    }

    return {
        startCountDown,
        hold
    }
}

export { Timer }