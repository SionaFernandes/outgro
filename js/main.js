const slideNextArrow = document.getElementById("next-slide-arrow");

// const body = document.getElementById('body');
const logo = document.getElementById("logo");

// ==============  AOS =======================

AOS.init({
  duration: 600,
  once: true,
  initClassName: "aos-init",
});
window.addEventListener("load", AOS.refresh);

// ============== logo-slider ============================================

var logoSlider = new Swiper(".logo-slider-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    998: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
  },
});

slideNextArrow.addEventListener("click", () => {
  logoSlider.slideNext();
});

// ============= Video Slider Section. Custom play button. ================
let play = document.getElementsByClassName("play");

for (var i = 0; i < play.length; i++) {
  play[i].addEventListener("click", function () {
    let myVideo = this.previousElementSibling;

    if (myVideo.paused) {
      myVideo.play();
      this.classList.add("pause");
    } else {
      myVideo.pause();
      this.classList.remove("pause");
    }
  });
}

// ============= Smooth Scroll =============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =========== scroll to top arrow ============================================
// const arrowTop = document.getElementById("arrow-up");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 915) {
//     arrowTop.classList.remove("animate-opacity");
//   } else {
//     arrowTop.classList.add("animate-opacity");
//   }
// });

// ============== If clients asks for scroll up down logo toggle ==============
// Initial state
// var scrollPos = 0;
// adding scroll event
// window.addEventListener("scroll", function () {
//   let scrollPosition = window.scrollY;
//   if (scrollPosition >= 240) {
//     if (document.body.getBoundingClientRect().top > scrollPos) {
//       // togglOpacity();
//       logo.classList.remove("animate-opacity");
//     } else {
//       logo.classList.add("animate-opacity");
//     }
//   }
// saves the new position for iteration.
//   scrollPos = document.body.getBoundingClientRect().top;
// });

// ===================== AOS EVENTS ===================================

// document.addEventListener('aos:in:super-duper', ({ detail }) => {
//     console.log('animated in', detail);
//     detail.classList.add('test')
// });

// document.addEventListener('aos:out:super-duper', ({ detail }) => {
//     console.log('animated out', detail);
// });
