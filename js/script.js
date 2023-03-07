// creare un array di immagini

// creare variabili per elementi html

// inserire le img in un ciclo for per lo slide
//  -sostituzione del src

// collegare l'evento slide al click
//  -la up icon si riferisce alle img prima (left): i--
//  -la down icon si riferisce alla img dopo (right): i++


// creare un array di immagini
const images = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// creare variabili per elementi html
let upIconEl = document.getElementById("up-icon");

let downIconEl = document.getElementById("down-icon");

let activeImgEl = document.getElementById("img-active");