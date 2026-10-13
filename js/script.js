const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
        "aria-label",
        open ? "Close navigation menu" : "Open navigation menu"
    );
}

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("open");
    setMenu(!isOpen);
});

navItems.forEach((item) => {
    item.addEventListener("click", () => setMenu(false));
});

document.addEventListener("click", (event) => {
    if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        setMenu(false);
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
        setMenu(false);
    }
});
