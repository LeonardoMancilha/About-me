const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");

let index = 0;

nextEl.addEventListener('click', () => {
    index++;
    if(index > slides.length - 1){
        index = 0
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
})

prevEl.addEventListener('click', () => {
    index--;
    if(index < 0){
        index = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
})