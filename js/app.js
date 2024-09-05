
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(" .carousel .thumbnail");
let timeRunning = 3000;
let timeAuto = 7000;
let runTimeOut;
let runAutorun = setTimeout(()=>{
    nextDom.click()
}, timeAuto)
nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
function bromopage(){
    window.location.href = "pages/bromo.html"
}
// carousel
function Yogyakarta_Page(){
    window.location.href = "pages/Yogyakarta.html"
}
function Bali_Page(){
    window.location.href = "pages/Bali.html"
}
function RajaAmpat_Page(){
    window.location.href = "pages/Raja Ampat.html"
}
// carousel
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev')
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutorun);
    runAutorun = setTimeout(()=>{
        nextDom.click()
    }, timeAuto)
}
// destination populer
const items = document.querySelectorAll('.destination-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            const itemTop = entry.boundingClientRect.top; 
            const windowHeight = window.innerHeight; 
            

            if (itemTop > windowHeight) {
                entry.target.classList.remove('animate');
                entry.target.classList.remove('animate-done');
            }
        }
    });
}, {
    threshold: 0.001 
});items.forEach(item => observer.observe(item));

    let animateIndex = 0;
    const totalItems = items.length;
    
    items.forEach(item => {
        observer.observe(item);
    

        item.addEventListener('animationend', (event) => {
        
            if (event.animationName === 'fadeUP') {
                animateIndex += 1;
    
               
                if (animateIndex === totalItems) {
                    items.forEach(i => {
                        i.classList.remove('animate');
                        i.classList.add('animate-done');
                    });
                }
            }
        });
    });

