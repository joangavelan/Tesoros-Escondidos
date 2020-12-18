const hamburgerEl = document.querySelector('.nav__hamburger');
const hamburgerBars = document.getElementsByClassName('nav__hamburger-bar');
const menuEl = document.querySelector('.nav__menu');

const toggleNav = () => {
    hamburgerEl.addEventListener('click', () => {
        //menu display
        if(menuEl.style.maxHeight) {
            menuEl.style.maxHeight = null;
        }
        else {
            menuEl.style.maxHeight = menuEl.scrollHeight + 'px';
        }
        //hamburger bars animation trigger
        for(let item of hamburgerBars) {
            item.classList.toggle('active');
        }
    })
}

toggleNav();