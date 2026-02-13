function showLove() {
    const text = document.getElementById("hiddenText");
    text.style.display = "block";
}

const song = document.getElementById("ourSong");
const button = document.getElementById("musicButton");

function toggleMusic() {
    if (song.paused) {
        song.play();
        button.innerText = "Pause Kingston 🤍";
    } else {
        song.pause();
        button.innerText = "Play Kingston 🤍";
    }
}


const startDate = new Date("2025-11-08");

function updateCountdown() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    document.getElementById("countdown").innerText =
        days + " days and " + hours + " hours with you 🤍";
}

updateCountdown();
setInterval(updateCountdown, 1000);
