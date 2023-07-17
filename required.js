const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href);
})
console.log(activePage);

function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".nav-links");

    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}