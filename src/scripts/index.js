import '../styles/index.scss';

//Burger 
const burger = document.querySelector(".burger");
burger.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('nav--active');
    document.querySelector('.burger').classList.toggle('burger--active');
})
