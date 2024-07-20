// Set the initial countdown time (in seconds)
const initialTime = 5400; // 1 hour 30 minutes

function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(() => {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = Math.floor(timer % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = ` ${hours}:${minutes}:${seconds}`;

        if (--timer < 0) {
            timer = duration; // Reset the timer
        }
    }, 1000);
}

window.onload = function () {
    const countdownElement = document.getElementById('countdown');
    startCountdown(initialTime, countdownElement);
};

 // Show or hide the back-to-top button
 window.onscroll = function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}