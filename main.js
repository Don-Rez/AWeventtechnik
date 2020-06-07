function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransitionLeave() {
  var tl = gsap.timeline();
  tl.to(".load-container div", {
    duration: 1.5,
    width: "110%",
    left: "0%",
    ease: "Expo.easeInOut",
    stagger: 0.2,
  });

  tl.to(".load-container div", {
    duration: 0.5,
    width: "0%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
    stagger: 0.1,
  });
  tl.set(".load-container div", { left: "-100%" });
}
function pageTransitionEnter() {
  tl.to(".load-container div", {
    duration: 0.5,
    width: "0%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
    stagger: 0.1,
  });
  tl.set(".load-container div", { left: "-100%" });
}

var slideIndex = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-links");
  var navLinks = document.querySelectorAll(".nav-links li");

  //toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //Animate Links
    navLinks.forEach((li, index) => {
      if (li.style.animation) {
        li.style.animation = "";
      } else {
        li.style.animation =
          "navLinkFade 0.5s ease forwards ${index / 7 + 1.3}s ";
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
}

$(function () {
  barba.init({
    transitions: [
      {
        async leave(data) {
          const done = this.async();

          pageTransitionLeave();
          await delay(1000);
          done();
        },

        async enter(data) {
          window.location.reload();
        },

        async once(data) {},
      },
    ],
  });
  barba.hooks.afterEnter((data) => {
    // JS functions here
    navSlide();
    showSlides();
  });
});
