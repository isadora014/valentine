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
