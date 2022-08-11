const listItem = document.querySelectorAll('.nav__main-element');
const hamburgerOpen = document.querySelectorAll('.header__menu-img');




const dropdownList = () => {
    listItem.forEach((item) => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('nav__dropdown-list--active')
        })

    })
}


dropdownList();
menuToggle(hamburgerOpen);
menuToggle(hamburgerClose)