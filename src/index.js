const menuButton = document.querySelector('.open-button');
const mainMenu = document.querySelector('.main-menu');
const closeButton = document.querySelector('.close-button');
const bodyHandler = document.querySelector('body');
const arrowDown = document.querySelector('.arrow-down');
const featuresSlideDown = document.querySelector('.features');
const featuresSlide = document.querySelector('.features-slide');
const companySlideDown = document.querySelector('.company')
const companySlide = document.querySelector('.company-slide')


companySlideDown.addEventListener('click', e => {
    companySlide.classList.toggle('just-menu');
})

featuresSlideDown.addEventListener('click', e => {
    featuresSlide.classList.toggle('just-menu')

})

menuButton.addEventListener('click', e => { 
    mainMenu.style.display = 'flex';
    bodyHandler.classList.add('done');
});

closeButton.addEventListener('click', e => { 
    mainMenu.style.display = 'none';
    bodyHandler.classList.remove('done');
});
