








const parent = document.querySelectorAll(".drop-down");
const nav = document.querySelector("nav");

for (let i = 0; i < parent.length; i++) {
  parent[i].addEventListener("click", function () {
    let ddStatus = parent[i].childNodes[2].style.display;

    if (ddStatus === "flex") {
      parent[i].childNodes[2].style.display = "none";
    } else {
      closeAll(parent);
      parent[i].childNodes[2].style.display = "flex";
    }
  })
}

function closeAll(arg) {
  for (let i = 0; i < arg.length; i++) {
    arg[i].childNodes[2].style.display = "none";
  }
}

document.addEventListener("click", function (e) {
  if (!nav.contains(e.target)) {
    closeAll(parent);
  }
})

// Mobile Nav

const mParent = document.querySelectorAll(".mobile-nav .m-drop-down");
const mNav = document.querySelector(".mobile-nav");
const toggleNav = document.getElementById("toggle-nav");

for (let i = 0; i < mParent.length; i++) {
  mParent[i].addEventListener("click", function () {
    let ddStatus = mParent[i].childNodes[2].style.display;

    if (ddStatus === "block") {
      mParent[i].childNodes[2].style.display = "none";
    } else {
      closeAll(mParent);
      mParent[i].childNodes[2].style.display = "block";
    }
  })
}

toggleNav.addEventListener("click", function () {
  mNav.classList.toggle("open");
  toggleNav.classList.toggle("open");
})

window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById("desktop-nav");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



































