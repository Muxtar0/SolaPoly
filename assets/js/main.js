const FaqContent = document.querySelectorAll('.FaqContent');
const TimelInes = document.querySelectorAll('.TimeLine');
let index = 0;
for(let i = 0 ; i < FaqContent.length ; i++){
    FaqContent[i].addEventListener('click' , () => {
        for(let i = 0 ; i < TimelInes.length ; i++){
            TimelInes[i].classList.remove('active');
        }
        if(index == i){
            FaqContent[index].classList.remove('active');
        }

        FaqContent[i].classList.toggle('active');
        FaqContent[index].classList.remove('active')
        TimelInes[i].classList.add('active')
        index = i;
    })
}

const HamburgerMenuOpenBtn = document.querySelector('.HamburgerMenuOpen .hamburger');
const MobileOpenMenu = document.querySelector('.MobileOpenMenu');
const header = document.querySelector('.header');
const TopSection = document.querySelector('#TopSection')
HamburgerMenuOpenBtn.addEventListener('click' , () => {
    HamburgerMenuOpenBtn.classList.toggle('is-active');
    MobileOpenMenu.classList.toggle('active');
    setTimeout(() => {
        MobileOpenMenu.classList.toggle('active2');
    },500)
    header.classList.toggle('active');
    TopSection.classList.toggle('active')
})



const Cards = document.querySelectorAll('.CardsBanner .card')
const swiperSlides = document.querySelectorAll('.swiper-slide-Pipop')
const Pipop = document.querySelectorAll('.Pipop');
const PipopCloseBtn = document.querySelectorAll('.PipopCloseBtn');

for(let i=0;i<Cards.length;i++){
    Cards[i].addEventListener('click' , () => {
        Pipop[i].classList.add('active');
    })
}
for(let i=0;i<PipopCloseBtn.length;i++){
    PipopCloseBtn[i].addEventListener('click' , (e) => {
        for(let i=0;i<Cards.length;i++){
            Pipop[i].classList.remove("active");
        }
    })
}
