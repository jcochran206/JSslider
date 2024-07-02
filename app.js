//variables for dom interactions 
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItem = document.querySelector('.carousel .list');
let thumbnailList = document.querySelector('.carousel .thumbnail');

//callback functions 
nextBtn.onclick = function(){
    showSlider('next');
}

//functions

