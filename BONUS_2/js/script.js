// creare un array di immagini

// creare variabili per elementi html

// inserire le img in un ciclo for per lo slide
//  -sostituzione del src

// collegare l'evento slide al click
//  -la up icon si riferisce alle img prima (left): i--
//  -la down icon si riferisce alla img dopo (right): i++


// creare un array di immagini
const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

// creare variabili per elementi html
let upIconEl = document.getElementById("up-icon");

let downIconEl = document.getElementById("down-icon");

let activeImgEl = document.getElementById("img-active");

let imgEl = document.getElementById("img");

let thumbnailEl = document.getElementById("thumbnail");

let i = 0;

imgEl.src = images[i];

let newElement;




// collegare l'evento slide al click
downIconEl.addEventListener('click', function(){

    thumbnailImgEl[i].classList.remove("active");
    
    i++;
    
    
    if( i < images.length ){
        
        imgEl.src = images[i];
        
        
    } else {
        
        i = 0;
        imgEl.src = images[i];
    }
    
    thumbnailImgEl[i].classList.add("active");
})

upIconEl.addEventListener('click', function(){


    thumbnailImgEl[i].classList.remove("active");

    i--;

    if( i >= 0 ){

        imgEl.src = images[i];

    } else {

        i = images.length -1;

        imgEl.src = images[i];

    }

    thumbnailImgEl[i].classList.add("active");

})


// creazione del thumbnail

for(let i = 0; i < images.length; i++){

    newElement = document.createElement ('img');

    thumbnailEl.append(newElement);

    newElement.src = images[i];

}

let thumbnailImgEl = document.querySelectorAll("#thumbnail img");
thumbnailImgEl[i].classList.add("active");

