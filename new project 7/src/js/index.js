'use strict'
// бургер меню
let official = document.querySelector('.header__official');
let contact = document.querySelector('.header__contact');
let gamburger = document.querySelector('.gamburger');
let wrapper = document.querySelector('.wrapper-gamburger');
gamburger.addEventListener('click', toggle)
  
function toggle(){
    gamburger.classList.toggle('gamburger_active');
    contact.classList.toggle('active');
    official.classList.toggle('active');
    wrapper.classList.toggle('active');
}

// слик слайдер
$(document).ready(function(){
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron-right-solid.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/chevron-left-solid.png" alt=""></button>',
        responsive: [
            {
                  breakpoint: 760, 
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    nextArrow: false,
                    prevArrow: false,
                  
                }
            }
        ]
    })});

// табы
const tabs = document.querySelectorAll('.catalog__button');
const wrapper2 = document.querySelectorAll('.catalog__wrapper2');
function colorSwitch(){
    for(let elem of tabs){
        elem.classList.remove('catalog__button-active');
    }
    this.classList.add('catalog__button-active');
}
function tabsSwitch(){
    for( let i = 0; i < tabs.length; i++){
        for(let j = 0; j < wrapper2.length; j++ ){
            if(tabs[i].classList.contains('catalog__button-active') == true && j == i){
                wrapper2.forEach(function(elem){
                    elem.classList.add('catalog__wrapper2-active');
                })
            wrapper2[j].classList.remove('catalog__wrapper2-active')}
        }
    }
}
tabs.forEach(function(elem){
        elem.addEventListener('click', colorSwitch);
        elem.addEventListener('click', tabsSwitch);
    })
// переключатель табов
const more = document.querySelectorAll('.more');
const catalogItem = document.querySelectorAll('.catalog__item');
const catalogList = document.querySelector('.catalog__info');

let arr = [];
for (let i = 0; i < catalogItem.length; i++){
    arr.push(catalogList.cloneNode(true));
}
let clone = [];
for(let elem of catalogItem){
    clone.push(elem)
}
more.forEach(function(elem){
    elem.addEventListener('click', function(e){
        if(elem == e.target){
           let index = clone.indexOf(elem.parentElement);
           arr[index].classList.add('catalog__info-active');
           clone[index].replaceWith(arr[index]);
        }
    })
})
let back = [];
for(let elem of arr){
   back.push(elem.querySelector('.back'))
}

back.forEach((elem)=>{
    elem.addEventListener('click', function(e){
        if(elem == e.target){
            let index = arr.indexOf(elem.parentElement);
            arr[index].replaceWith(clone[index]);
        }
    })
})



///////// модальные окна 1
const buttonModal = document.querySelector('#modal');
const wrapperModal = document.querySelector('#wrapper-modal1');
const redCross = document.querySelector('#red-cross1');

buttonModal.addEventListener('click', function(){
    wrapperModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
})
redCross.addEventListener('click', close);
function close(){
    wrapperModal.style.display = 'none';
    document.body.style.overflow = '';
}
// модальные окна 2
const wrapperModal2 = document.querySelector('#wrapper-modal2');
const redCross2 = document.querySelector('#red-cross2');
const modalP = document.querySelector('#wrapper-modal2 p');

catalogItem.forEach(function(elem){
    elem.addEventListener('click', function(e){
        let buttonTab = elem.querySelector('.button_tabs');
        let h3 = elem.querySelector('h3');
        if(e.target == buttonTab){
            wrapperModal2.style.display = 'block';
            document.body.style.overflow = 'hidden';
            modalP.textContent = h3.textContent;
        }   
})
    })
redCross2.addEventListener('click', function(){
    wrapperModal2.style.display = 'none';
    document.body.style.overflow = '';
})

// модальные окна для catalog__info
let buttonTabs2 = [];
arr.forEach(function(elem){
    buttonTabs2.push(elem.lastElementChild)
})
buttonTabs2.forEach(function(elem){
    elem.addEventListener('click', function(){
            let index = arr.indexOf(elem.parentElement);
            let h3 = catalogItem[index].querySelector('h3');
            wrapperModal2.style.display = 'block';
            document.body.style.overflow = 'hidden';
            modalP.textContent = h3.textContent;
            
    })
})

// валидация формы
const forms = document.querySelectorAll('.feed-form');

forms.forEach(function(elem){
    elem.name.addEventListener('change', validityForms);
})

function validityForms(){
    this.setCustomValidity('');
    if(this.validity.patternMismatch) {
        this.setCustomValidity('Могут использоваться кириллица, латиница и цифры')
    }
}

const redCrossCollection = document.querySelectorAll('.red-cross');
redCrossCollection.forEach((elem)=> {
    elem.addEventListener('click', ()=>{
            forms.forEach((elem)=>{
                elem.reset();
            })
        
    })
})

//отправка формы eeeeee!!!!!
forms.forEach(function(elem){
    elem.addEventListener('submit', async function(e){
        e.preventDefault();
        let response;
        if(elem == e.target){
        response = await fetch('mailer/smart.php', {
            method: 'POST',
            body: new FormData(elem),
        })} if(response.ok == true){
            alert('форма отправлена');
            elem.reset();
        }

        })})


// красная стрелочка
const pageAp = document.querySelector('.pageap');
window.addEventListener('scroll', function() {
   let sc = scrollY;
   if(sc > 1600){
     pageAp.style.display = 'block';
   }
   else{
    pageAp.style.display = 'none';
   }
  })
  




