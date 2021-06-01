
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

document.getElementById("blogs").addEventListener("click", openMenu);
function openMenu(){

document.getElementById("dropdown").classList.toggle("active");

}

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbarMenu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

