function Timer({ minutesDisplay, secondsDisplay, isCountDownInactive }) {

    let timerTimeOut = 0;

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
                minutes = minutes - 1;
            }

            secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
            minutesDisplay.textContent = String(minutes).padStart(2, "0");

            countdown();
        }, 1000)
    }

    function hold() {
        clearTimeout(timerTimeOut);
    }

    return {
        countdown,
        hold
    }
}

export { Timer }