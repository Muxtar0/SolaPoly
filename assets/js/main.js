const FaqContent = document.querySelectorAll('.FaqContent');

for(let i = 0 ; i < FaqContent.length ; i++){
    FaqContent[i].addEventListener('click' , () => {
        FaqContent[i].classList.toggle('active')
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