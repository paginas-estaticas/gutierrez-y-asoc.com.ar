const headerElement = document.getElementsByTagName("header")[0];
const hamburgerMenu = document.getElementById("hamburguer-menu-icon");
const navMenu = document.getElementsByTagName("nav")[0];
const logoElement = document.getElementById("header-logo");

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

hamburgerMenu.addEventListener("click", async () => {
    if (hamburgerMenu.classList.contains("active")) {
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
        logoElement.classList.remove("light");
        headerElement.classList.add("deactivate");
        await delay(0.3)
        headerElement.classList.remove("active"); 
        headerElement.classList.add("deactivate");
        headerElement.classList.remove("deactivate");
    } else {
        headerElement.classList.toggle("active")
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
        logoElement.classList.toggle("light");
    } 
});


document.querySelectorAll(".nav-li-element").forEach(element => 
    element.addEventListener("click", async () => {
        headerElement.classList.remove("active")
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
        logoElement.classList.remove("light");
    }));