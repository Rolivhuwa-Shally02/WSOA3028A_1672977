const navbarMenuToggler = document.querySelector(".navbarMenu-toggler");
const navbarMenu = document.querySelector(".navbarMenu ul");
const navbarMenuLinks = document.querySelectorAll(".navbarMenu a")
navbarMenuToggler.addEventListener("click", navbarMenuTogglerClick);

function navbarMenuTogglerClick()
{
    navbarMenuToggler.classList.toggle("open-navbarMenu-toggler");
    navbarMenu.classList.toggle("open")

}
navbarMenuLinks.forEach (elem => elem.addEventListener("click", navbarMenuLinkClick))
function navbarMenuLinkClick()
{
    if (navbarMenu.classList.contains("open")){
        navbarMenuToggler.click();
    }
}