var menuIcon = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobile-menu")

// console.log(menuIcon);
menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menuIcon.classList.toggle('is-active');
    mobileMenu.classList.toggle('active-menu');
})
