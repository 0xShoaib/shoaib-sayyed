const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  if (nav.classList.contains("on")) {
    nav.classList.remove("on");
    nav.classList.add("off");
  } else if (
    nav.classList.contains("on") === false ||
    nav.classList.contains("off")
  ) {
    nav.classList.remove("off");
    nav.classList.add("on");
  }

  hamburger.classList.toggle("open");
  navLinks.classList.toggle("active");
});

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

function removeClass() {
  nav.classList.remove("on");
  nav.classList.add("off");
  hamburger.classList.remove("open");
  navLinks.classList.remove("active");
}

link1.addEventListener("click", removeClass);
link2.addEventListener("click", removeClass);
link3.addEventListener("click", removeClass);
link4.addEventListener("click", removeClass);
link5.addEventListener("click", removeClass);
