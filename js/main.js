"use strict";
// Hämtar klasser från headern till hamburgarmenyn
const menuButton = document.querySelector(".header-menu");
const menuLinks = document.querySelector(".menu");

// Hämtar element från bildspelet
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
const counter = document.querySelector(".counterslide");
const slideImg = document.querySelector(".slideshow");

const pictures = document.querySelectorAll(".slide-picture");

// Öppnar och stänger hamburgarmenyn
menuButton.addEventListener("click", function() {
    menuLinks.classList.toggle("open");
})


/**
 * Bilspelet
 */
let picNow = 0;

//När man trycker på högerknappen i bildspelet, så räknar det ut vilken bild som ska visas
function buttonNextPic () {

    if (picNow === pictures.length -1) {
        picNow = 0;
    } else { 
        picNow++;
    }

    showNextPic(picNow);
}

//När man trycker på vänsterknappen i bildspelet, så räknar det ut vilken bild som ska visas
function buttonPrevPic () {

    if (picNow === 0) {
        picNow = pictures.length -1;
    } else {
        picNow--;
    }

    showNextPic(picNow);
}

//Visar upp nästa bild, samt skriver ut vilket nummer på bilden det är
function showNextPic (picNow) {
    
    pictures.forEach(picture => {
        picture.classList.remove("picture-shows");
    });

    pictures[picNow].classList.add("picture-shows");

    counter.innerHTML = `${picNow +1}/${pictures.length}`;
}

//Lyssnar på knapptrycken, på den sidan knapparna existerar på
if (prevButton && nextButton) {
    prevButton.addEventListener("click", buttonPrevPic);
    nextButton.addEventListener("click", buttonNextPic);
}