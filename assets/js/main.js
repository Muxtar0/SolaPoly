const FaqContent = document.querySelectorAll('.FaqContent');

for(let i = 0 ; i < FaqContent.length ; i++){
    FaqContent[i].addEventListener('click' , () => {
        FaqContent[i].classList.toggle('active')
    })
}