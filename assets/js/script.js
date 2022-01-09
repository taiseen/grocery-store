// 1 Jan 2022

const menuBtn = document.getElementById('menu-bar');
const navBar = document.querySelector('.navbar');
const menuHeader = document.querySelector('.header-2');


menuBtn.addEventListener('click', () => {

    // Dropdown menu
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('userClick');

});


window.addEventListener('scroll', () => {

    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('userClick');

    // MenuBar going to stick on top... 
    if (window.scrollY > 150) {
        menuHeader.classList.add('fixedHere');
    } else {
        menuHeader.classList.remove('fixedHere');
    }
});