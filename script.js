// Selectors
const menu = document.querySelector('.menu')
const nav = document.getElementById('navigation')
const navItems = document.querySelectorAll('.nav--list-item')

// Initial Values
let navOpen = false

// Open and Close Navigation Functions
const openNav = () => {
    navOpen = true
    nav.style.top = '0'
    nav.style.position = 'fixed'
}

const closeNav = () => {
    navOpen = false;
    nav.style.position = 'absolute'
    nav.style.top = '-100vh';
}

// Sets Navigation to origianl Css stylings
const setInitial = () => {
    nav.style.top = null;
    nav.style.position = null;
}

// Open/Close Navigation Event Listener
menu.addEventListener('click', () => {
    navOpen ? closeNav() : openNav()
})

// Clicking on a Link in the Navigation Bar Closes the Navigation
navItems.forEach((element) => element.addEventListener('click', () => {
    closeNav()
    setInitial()
}))

// Resizing the Window Will Close the Navigation Bar for Aestetic Purposes
window.addEventListener('resize', () => {
    navOpen ? (closeNav(), setInitial()) : true
})
