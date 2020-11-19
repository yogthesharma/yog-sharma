// slider

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheel: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

// auto typer
var i = 0;
var txt = "Lorem ipsum typing effect!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// animate on scroll
AOS.init();

// appearing scrollbar
window.addEventListener("scroll", () => {
  if (window.scrollY >= 777) {
    document.querySelector("nav").classList.add("newnav");
  } else {
    document.querySelector("nav").classList.remove("newnav");
  }
  console.log(window.scrollY);
});

// hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-hover");
const body = document.querySelector("body");
const hamlinks = document.querySelectorAll(".nav-hover a");

hamburger.addEventListener("click", () => {
  document.querySelector("nav").classList.add("newnav");
  nav.classList.toggle("nav-click");
  body.classList.toggle("second-body");
  hamlinks.forEach((val) => val.classList.toggle("a-click"));
});

hamlinks.forEach((val) =>
  val.addEventListener("click", () => {
    nav.classList.remove("nav-click");
    body.classList.remove("second-body");
  })
);
