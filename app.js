let loginSection = document.querySelector('.login-section');
let home = document.getElementById('list1');
let about = document.getElementById('list2');
let product = document.getElementById('list3');
let cart = document.getElementById('list4');
let heroSection = document.querySelector('.hero_section');
let aboutSection = document.querySelector('.about_section');
let productSection = document.querySelector('.product_section');
let productMain = document.querySelector('.product_main');
let cartSection = document.querySelector('.cart_section');
let harmburger = document.querySelector('.navbar_harmburger');
let dropdown = document.querySelector('.dropdown');
let firstSection = document.getElementById('line1');
let secondSection = document.getElementById('line2');
let thirdSection = document.getElementById('line3');
let fourthSection = document.getElementById('line4');

let changeSection = () => {

    firstSection.addEventListener('click', function() {
        heroSection.style.display = 'flex';
        aboutSection.style.display = 'none';
    
        firstSection.classList.add('line');
        secondSection.classList.remove('line');
        thirdSection.classList.remove('line');
        fourthSection.classList.remove('line');
    
    })
    
    secondSection.addEventListener('click', function() {
        heroSection.style.display = 'none';
        aboutSection.style.display = 'flex';
    
        firstSection.classList.remove('line');
        secondSection.classList.add('line');
        thirdSection.classList.remove('line');
        fourthSection.classList.remove('line');
    
    })
    
    thirdSection.addEventListener('click', function() {
        heroSection.style.display = 'none';
        aboutSection.style.display = 'none';
    
        firstSection.classList.remove('line');
        secondSection.classList.remove('line');
        thirdSection.classList.add('line');
        fourthSection.classList.remove('line');
    
    })
    
    fourthSection.addEventListener('click', function() {
        heroSection.style.display = 'none';
        aboutSection.style.display = 'none';
    
        firstSection.classList.remove('line');
        secondSection.classList.remove('line');
        thirdSection.classList.remove('line');
        fourthSection.classList.add('line');
    })
    
    home.classList.remove('list');
    
    home.addEventListener('click', function () {
        heroSection.style.display = 'flex';
        aboutSection.style.display = 'none';
    
        home.classList.add('list1');
        home.classList.remove('list');
        about.classList.add('list');
        about.classList.remove('list1');
        product.classList.remove('list1');
        product.classList.add('list');
        cart.classList.add('list');
        cart.classList.remove('list1');
    
    
    });
    
    about.addEventListener('click', function () {
        heroSection.style.display = 'none';
        aboutSection.style.display = 'flex';
        
        about.classList.add('list1');
        about.classList.remove('list');
        home.classList.add('list');
        home.classList.remove('list1');
        product.classList.remove('list1');
        product.classList.add('list');
        cart.classList.add('list');
        cart.classList.remove('list1');
        
    })
    
    product.addEventListener('click', function () {
        heroSection.style.display = 'none';
        aboutSection.style.display = 'none';
        
        product.classList.add('list1');
        product.classList.remove('list');
        home.classList.add('list');
        home.classList.remove('list1');
        about.classList.remove('list1');
        about.classList.add('list');
        cart.classList.add('list');
        cart.classList.remove('list1');
        
    })
    
    cart.addEventListener('click', function () {
        heroSection.style.display = 'none';
        aboutSection.style.display = 'none';
        
        cart.classList.add('list1');
        cart.classList.remove('list');
        home.classList.add('list');
        home.classList.remove('list1');
        product.classList.remove('list1');
        product.classList.add('list');
        about.classList.add('list');
        about.classList.remove('list1');
        
    })
    
    harmburger.addEventListener('click', function() {
        dropdown.style.display = 'flex'
    })
    
    loginSection.addEventListener('click', function() {
        dropdown.style.display = 'none';
    })
    
    heroSection.addEventListener('click', function() {
        dropdown.style.display = 'none';
    })
    
    aboutSection.addEventListener('click', function() {
        dropdown.style.display = 'none';
    })
    
    cartSection.addEventListener('click', function() {
        dropdown.style.display = 'none';
    })
}

changeSection();

let products = [
    
]
