import '../styles/index.scss';

//Scroller
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 700
});

//Burger 
const burger = document.querySelector(".burger");
burger.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('nav--active');
    document.querySelector('.burger').classList.toggle('burger--active');
})

const links = document.querySelectorAll(".nav__element");
links.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('nav--active');
    document.querySelector('.burger').classList.toggle('burger--active');
    console.log("ok");
  })
})

const scrollTopBtn = document.querySelector('.scroll--button')

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 250) {
    scrollTopBtn.style.opacity = 1;
  } else {
    scrollTopBtn.style.opacity = 0;
  }
})
