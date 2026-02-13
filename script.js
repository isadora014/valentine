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
function showSurprise() {
    const text = document.getElementById("surpriseText");
    text.style.display = "block";
}

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);


