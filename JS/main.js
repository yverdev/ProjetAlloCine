/* var slider = new Array("James-Bond.jpg", "10-JOURS-SANS-MAMAN.jpg", "trolls2.jpg", "BLOODSHOT (2020).jpg", "BAD-BOYS.jpg", "en-avant.jpg");
var numero = 0;
var next = document.querySelector('#suivant');
var sens = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slider.length - 1;
    if (numero > slider.length - 1)
        numero = 0;
    document.querySelector("#slider").src = slider[numero];
    console.log('ChangeSlide');
}

next.addEventListener('onclick', ChangeSlide);
console.log('next'); */

var slides =
[
    { image: 'img/films/James-Bond.jpg' },
    { image: 'img/films/10-JOURS-SANS-MAMAN.jpg' },
    { image: 'img/films/trolls2.jpg' },
    { image: 'img/films/BLOODSHOT (2020).jpg' },
    { image: 'img/films/BAD-BOYS.jpg' },
    { image: 'img/films/en-avant.jpg' }
];

var index = 0;
var idInterval = null;



var nextBtn = document.querySelector('button#suivant');
var prevBtn = document.querySelector('button#precedent');
var imgFirstElt = document.querySelector('.firstImg');
var imgSecondElt = document.querySelector('.secondImg');
var imgThirdElt = document.querySelector('.thirdImg');

console.log('imageElt')
//console.log('')
//console.log('')


//console.log('nextImg');

function nextImg(){
    index = index+3;

    if(index > slides.length + 1){
        index = 0;
    }
    else if(index+1 > slides.length + 1){
        index = 0;
    }
    else if(index+2 > slides.length + 1){
        index = 0;
    }
    imgFirstElt.src = slides[index].image;
    imgSecondElt.src = slides[index+1].image;
    imgThirdElt.src = slides[index+2].image;

}


nextBtn.addEventListener('click', nextImg);

function prevImg(){
    index = index-3;

    if(index < 0){
        index = slides.length-1;
    }
    else if(index -1 < -1 ){
        index = slides.length-2;

    }
    else if(index- 2 < -2){
        index = slides.length-3;

    }
    imgFirstElt.src = slides[index].image;
    imgSecondElt.src = slides[index+1].image;
    imgThirdElt.src = slides[index+2].image;

}


prevBtn.addEventListener('click', prevImg);
