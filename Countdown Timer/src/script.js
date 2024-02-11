(function () {
    var hour = document.querySelector(".hour");
    var min = document.querySelector(".min");
    var sec = document.querySelector(".sec");

    var startBtn = document.querySelector(".start");
    var stopBtn = document.querySelector(".stop");
    var resetBtn = document.querySelector(".reset");

    var countdownTimer = null;

    startBtn.addEventListener("click", function () {
        if (hour.value == 0 && min.value == 0 && sec.value == 0) {
            console.log("hello");
            return;
        }

        function startInterval() {
            startBtn.style.display = "none";
            stopBtn.style.display = "initial";

            countdownTimer = setInterval(() => {
                timer();
            }, 1000);
        }

        startInterval();
    })

    function stopInterval(state) {
        startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

        startBtn.style.display = "initial";
        stopBtn.style.display = "none";
        clearInterval(countdownTimer);
    }

    function timer() {
         let hours = parseInt(hour.value) | 0;
        let minutes = parseInt(min.value) | 0;
        let seconds = parseInt(sec.value) | 0;

        if (hours === 0 && minutes === 0 && seconds === 0) {
            stop();
            return;
        }

        if (seconds > 0) {
            if (seconds > 60) {
                minutes++;
                seconds = seconds - 59;
            } else {
                seconds--;
            }
        } else if (minutes > 0) {
            if (minutes > 60) {
                console.log("min", hours)
                hours++;
                minutes = minutes - 59;
            } else {
                minutes--;
                seconds = 59;
            }
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        }

        hour.value = hours < 10 ? `0${hours}` : hours;
        min.value = minutes < 10 ? `0${minutes}` : minutes;
        sec.value = seconds < 10 ? `0${seconds}` : seconds;
    }

    stopBtn.addEventListener("click", () => {
        stopInterval("pause");
    })

    resetBtn.addEventListener("click", () => {

        hour.value = "";
        min.value = "";
        sec.value = "";

        startBtn.style.display = "initial";
        stopBtn.style.display = "none";

        stopInterval();
    })
})();
