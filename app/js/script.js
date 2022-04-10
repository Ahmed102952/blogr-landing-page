const toggleMenu = document.querySelector('#toggle-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const linkBox = document.querySelectorAll('.link div');
const links = document.querySelectorAll('.link a');


toggleMenu.addEventListener('click', () => {
    if(toggleMenu.classList.contains('opened')){ // close menu
        toggleMenu.classList.remove('opened');
        mobileMenu.classList.remove('active');
    } else { //open menu
        toggleMenu.classList.add('opened');
        mobileMenu.classList.add('active');
    }
})

links.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(document.querySelectorAll('.link')[i].classList.contains('active')) {
            document.querySelectorAll('.link')[i].classList.remove('active');
        } else {
            document.querySelectorAll('.link').forEach(element => {
                element.classList.remove('active');
            })
            document.querySelectorAll('.link')[i].classList.add('active');
        }       
    })
})