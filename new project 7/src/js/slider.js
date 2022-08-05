// попытка 3 слайдера
const constWidth = document.querySelector('.slider').offsetWidth;
const leftButton = document.querySelector('.left-slider');
const rightButton = document.querySelector('.right-slider');
let step = 0;
let numberArr = 0;
const sliderItem = document.querySelector('.slider__item');
let sliderImg = document.querySelectorAll('.slider__item img');
let sliderWrapper = document.querySelector('.slider-wrapper');

function left() {
   sliderItem.style.left = -step * constWidth + 'px';
    if(step == sliderImg.length -1) {
        step = 0;
        numberArr = 0;
        sliderWrapper.remove();
        sliderItem.append(sliderWrapper.cloneNode(true))
        
    }
    else{
        step++;
        numberArr++;
        
        
    }
   
}
function rigt() {
    sliderItem.style.left = -step * constWidth + 'px';
     if(step == arr.length -1) {
         step = 0;
         numberArr = 0;
     }
     else{
         step++;
         numberArr++;
     }
    
 }
leftButton.addEventListener('click', left );
rightButton.addEventListener('click', left);