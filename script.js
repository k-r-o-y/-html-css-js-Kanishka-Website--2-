function toggleMenu() { /* targeting menu-links and hamburger-icon and upon click it'll add or remove open class*/
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}