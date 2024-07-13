const btnAbout = document.querySelectorAll('.btn-link ');
const popUp = document.querySelector('.form');
const clousebtn = document.querySelectorAll('.form__clouse');

document.addEventListener('click', burgerMenu);
function burgerMenu(event) {
    if (event.target.closest('.btn-link')) {
        popUp.classList.add('_active')
    };
    if (event.target.closest('.form__clouse')) {
        popUp.classList.remove('_active')
    }
}