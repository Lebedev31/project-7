let official = document.querySelector('.header__official');
let contact = document.querySelector('.header__contact');
let gamburger = document.querySelector('.gamburger');
let wrapper = document.querySelector('.wrapper-gamburger');
let span = gamburger.querySelectorAll('span');
gamburger.addEventListener('click', toggle)
  
function toggle(){
    gamburger.classList.toggle('gamburger_active');
    contact.classList.toggle('active');
    official.classList.toggle('active');
    wrapper.classList.toggle('active');
}


