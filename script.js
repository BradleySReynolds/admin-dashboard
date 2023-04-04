const menu = document.querySelector('.menu')
const nav = document.getElementById('navigation')
const navItems = document.querySelectorAll('.nav--list-item')

let navOpen = false

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

const setInitial = () => {
    nav.style.top = null;
    nav.style.position = null;
}

menu.addEventListener('click', () => {
    navOpen ? closeNav() : openNav()
})

navItems.forEach((element) => element.addEventListener('click', () => {
    closeNav()
    setInitial()
}))

window.addEventListener('resize', () => {
    navOpen ? (closeNav(), setInitial()) : true
})
