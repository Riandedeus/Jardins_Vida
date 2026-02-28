function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-mobile-icon img').src="https://img.icons8.com/?size=100&id=59832&format=png&color=2D5A27";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.menu-mobile-icon img').src="https://img.icons8.com/?size=100&id=8112&format=png&color=2D5A27";
    }
}