const header = document.getElementsByTagName("header")[0];

/// Change header color

if (window.scrollY > 50) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})