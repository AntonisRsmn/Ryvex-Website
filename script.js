// SideBar
function showSidebar () {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}

function hideSidebar () {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}

// DarkMode
let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")
const sidebarThemeSwitch = document.getElementById("sidebar-theme-switch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    if(document.getElementById("img1")) document.getElementById("img1").src="Imgs/desc-1-light.png"
    if(document.getElementById("img2")) document.getElementById("img2").src="Imgs/desc-2-light.png"
    if(document.getElementById("img3")) document.getElementById("img3").src="Imgs/desc-3-light.png"
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
    if(document.getElementById("img1")) document.getElementById("img1").src="Imgs/desc-1-dark.png";
    if(document.getElementById("img2")) document.getElementById("img2").src="Imgs/desc-2-dark.png";
    if(document.getElementById("img3")) document.getElementById("img3").src="Imgs/desc-3-dark.png";
}

if (darkmode ==="active") enableDarkmode()

const toggleTheme = () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
}

if(themeSwitch) themeSwitch.addEventListener("click", toggleTheme)
if(sidebarThemeSwitch) sidebarThemeSwitch.addEventListener("click", toggleTheme)

// Scroll Fade Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll('.ryvex, .img-1, .img-2, .img-3, .footer, form, .dc-1');
elementsToAnimate.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Sticky Navbar
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
})

// Ensure body is always scrollable on load
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflow = 'auto';
});

// Close sidebar on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 754) {
        hideSidebar();
    }
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    const sidebar = document.querySelector(".sidebar");
    const trigger = document.querySelector(".nav-icon");
    
    if (sidebar && sidebar.style.display === "flex") {
        if (!sidebar.contains(e.target) && (!trigger || !trigger.contains(e.target))) {
            hideSidebar();
        }
    }
});