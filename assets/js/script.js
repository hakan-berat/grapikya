const toggleBtn = document.getElementById('nav-toggle')
const closeBtn = document.getElementById('nav-close')
const navMenu = document.getElementById('nav-menu')

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*CLOSE NAV WHEN CLICK MENU*/

const navLinks = document.querySelectorAll('.nav-link')

const closeNav = function () {
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(element => {
    element.addEventListener('click', closeNav)
})

/*SWIPPER*/

let swiper = new Swiper('.swiper-container', {
    /*cssMode: true,*/
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
    567: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
})
