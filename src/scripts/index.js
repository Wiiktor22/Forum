import '../styles/index.scss';

//Viewport
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

//Burger 
const burger = document.querySelector(".burger");
burger.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('nav--active');
    document.querySelector('.burger').classList.toggle('burger--active');
})
