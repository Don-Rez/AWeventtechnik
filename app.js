const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

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
};

navSlide();
