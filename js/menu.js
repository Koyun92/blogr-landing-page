const burgerToggle = () => {
    const hamburgerIcon = document.querySelectorAll('.header__burger-icon');
    const mobileNav = document.querySelector('.nav-mobile__list');
    hamburgerIcon.forEach(item => {

        item.addEventListener('click', () => {
            mobileNav.classList.toggle('nav-mobile__list--flex');
            for (let i = 0; i <= hamburgerIcon.length - 1; i++) {

                hamburgerIcon[i].classList.toggle('active');
            }
        })
    })
}


const dropdownList = () => {
    const listItem = document.querySelectorAll('.nav__dropdown-button');
    listItem.forEach((item) => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('nav__dropdown-list--active');
            item.lastChild.classList.toggle('nav__icon--rotate');
        })

    })
}


dropdownList();
burgerToggle();