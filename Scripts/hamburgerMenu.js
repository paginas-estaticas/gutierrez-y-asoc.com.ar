const headerElement = document.getElementsByTagName("header")[0];
const hamburgerMenu = document.getElementById("hamburguer-menu-icon");
const navMenu = document.getElementsByTagName("nav")[0];


hamburgerMenu.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("activte")) {
        headerElement.classList.remove("active")
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        headerElement.classList.toggle("active")
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    } 
});

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

document.querySelectorAll(".nav-li-element").forEach(element => 
    element.addEventListener("click", async () => {
        await delay(2000)
        headerElement.classList.remove("active")
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    }));