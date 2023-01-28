function Timer({ minutesDisplay, secondsDisplay, sounds }) {

    let timerTimeOut = 0;
    let isCountDownInactive = true;

    function startCountDown() {
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
                sounds.timeEnd();
                resetControls();
                isCountDownInactive = true;
                return
            }

            if (updateMinutes) {
                seconds = 60
                minutes = minutes - 1;
            }

            secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
            minutesDisplay.textContent = String(minutes).padStart(2, "0");

            countdown();
        }, 100)
    }

    function hold() {
        clearTimeout(timerTimeOut);
        isCountDownInactive = true;
    }

    function resetControls() {

    }

    return {
        startCountDown,
        hold
    }
}

export { Timer }