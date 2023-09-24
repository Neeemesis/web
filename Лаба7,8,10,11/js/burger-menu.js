const iconMenu = document.querySelector('.header__bth-icon');
if(iconMenu) {
    const menuNav = document.querySelector('.header__nav');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuNav.classList.toggle('active');
    });
}