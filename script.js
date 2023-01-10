let sources = [
    "./bilder/img2.jpg",
    "./bilder/img1.jpg",
    "./bilder/img3.jpg",
    "./bilder/img4.jpg",
    "./bilder/img5.jpg",
    "./bilder/img6.jpg"
];

document.images[2].style="width:30rem; box-shadow: 0 0 5rem white; border-radius:8px";
document.images[1].style="width:20rem; opacity: 0.4; margin-top:4%; border-radius:8px";
document.images[3].style="width:20rem; opacity: 0.4; border-radius:8px";
document.images[0].style="width:10rem; opacity: 0.2; border-radius:8px";
document.images[4].style="width:10rem; opacity: 0.2; border-radius:8px";

let images = document.getElementsByClassName('img');
let currentIndex = 0;

let timerLeft;
let timerRight;

generateImages();
function generateImages() {
    let i = currentIndex;
    let counter = 0;
    while (counter != 5) {
        if (i > 5) {
            i = 0;
        }
        images[counter].src = sources[i];
        ++counter;
        ++i;
    }
}

function slideRight() {
    clearInterval(timerLeft);
    clearInterval(timerRight);
    timerRight= setInterval(slideRight, 5000);
    ++currentIndex;
    if (currentIndex > 5) {
        currentIndex = 0;
    }
    generateImages();
}

function slideLeft() {
    clearInterval(timerLeft);
    clearInterval(timerRight);
    timerLeft = setInterval(slideLeft, 5000);
    --currentIndex;
    if (currentIndex < 0) {
        currentIndex = 5;
    }
    generateImages();
}