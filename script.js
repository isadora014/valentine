function showLove() {
    const text = document.getElementById("hiddenText");
    text.style.display = "block";
}

const button = document.getElementById("playButton");
const song = document.getElementById("ourSong");

button.addEventListener("click", function() {
    if (song.paused) {
        song.play();
        button.innerText = "Playing Kingston ♡";
    } else {
        song.pause();
        button.innerText = "Play Our Song 💕";
    }
});
function randomLove() {
    const messages = [
        "You're my safe place.",
        "My favorite human."
    ];

    const text = document.getElementById("loveMessage");
    const randomIndex = Math.floor(Math.random() * messages.length);
    text.innerText = messages[randomIndex];
    text.style.display = "block";
}

