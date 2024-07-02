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

let timer = 3000;
let runTimeOut;

//functions
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItem.appendChild(itemSlider[0]);
        thumbnailList.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
    }, timer)

    
}
