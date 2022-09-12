document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.getElementById('navOpenButton');
    const navList = document.getElementById('navList');
    let isOpen = false;

    const openMenu = () => {
        navButton.src = './assets/img/close.png';
        navList.classList.add('nav__list--open');
        document.documentElement.style.overflowY = 'hidden';
    };

    const closeMenu = () => {
        navButton.src = './assets/img/menu.png';
        navList.classList.remove('nav__list--open');
        document.documentElement.style.overflowY = 'visible';
    };

    navButton.addEventListener('click', () => {
        isOpen ? closeMenu() : openMenu();
        isOpen = !isOpen;
    });

    Array.from(navList.children).forEach((e) => {
        e.addEventListener('click', () => {
            closeMenu();
            isOpen = false;
        });
    });
});
