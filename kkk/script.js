"use strict";

const tontonGifs = [
   "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2dtZzdtcTh0eng3bDlpcXl1YXJmYTlucXZjcWY1dW8zMjRvM2h2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hMWo1XAK730PdAoNB9/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczFyMjhoYzduZmQ4NXlpbG9rNzA5eGY3M2JtdHowZXFidnc2emZ6dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dhNh0oM3UjgFR5pddL/giphy.webp",
    "https://media.tenor.com/zC-vPbdZdMMAAAAm/happy-excited-love-heart-dear.webp",
    "https://media.tenor.com/zC-vPbdZdMMAAAAm/happy-excited-love-heart-dear.webp",
    "https://media.tenor.com/zC-vPbdZdMMAAAAm/happy-excited-love-heart-dear.webp",
];

const title =  document.querySelector(".title");
const btnCOntainer = document.querySelector(".bottons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;

yesBtn.addEventListener("click", () => {
    title.innerHTML = "Yayyy i like you too <3"
    btnCOntainer.classList.add("hidden"); 
    chanegeImage("yes");
})

noBtn.addEventListener("click", () => {
    if(play) {
        noCount ++;
        const imageIndex = Math.min(noCount, MAX_IMAGES)
        chanegeImage(imageIndex)
resizeYesbuutton();
shrinNoButton()
updateNoButtonText();

        if(noCount === MAX_IMAGES) play = false;
    }
})

function resizeYesbuutton() {
    yesBtn.computedStyleMap,fontsize = `${parseFloat(window.getComputedStyle(yesBtn).fontsize) * 1.4}px`;

}

function shrinNoButton() {
    noButtonSize *= 0.85;
    noBtn.computedStyleMap.tranform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
    const massage = [
        "No TT",
        "Are you sure TT",
        "เอาจริงหรอ",
        "ไม่เอาได้มััยครับ",
        "ไม่เอานะๆๆ",
    ];
    return message(Math.min(noCount, massage.length - 1));

}

function chanegeImage(image) {
    img.src = image ==="yes" ? "https://media.tenor.com/zC-vPbdZdMMAAAAm/happy-excited-love-heart-dear.webp":
     tontonGifs(image) ;

}

function updateNoButtonText() {
    noBtn.innerHTML = generateMessage(noCount);
}
