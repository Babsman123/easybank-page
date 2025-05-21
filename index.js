//HEADER INTERSECTION
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
// const menu = [...document.querySelectorAll(".menu")];
const navLinks = document.querySelector(".nav__links");
const menuOpen = document.querySelector(".menu__icon--open");
const menuClose = document.querySelector(".menu__icon--close");

const allSections = document.querySelectorAll(".section");

const stickyNav = function (entries) {
  const [entry] = entries;
  //   console.log(entry);

  if (!entry.isIntersecting) {
    // nav.style.position = "fixed";
    nav.classList.add("sticky");
  } else {
    // nav.style.position = "relative";
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);

//REVEAL SECTIONS
const revealSection = function (entries, observer) {
  console.log(entries);
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

menuOpen.addEventListener("click", () => {
  header.classList.toggle("header-mobile");
  navLinks.style.transform = `translateX(0)`;
});

menuClose.addEventListener("click", () => {
  header.classList.toggle("header-mobile");
  navLinks.style.transform = `translateX(150%)`;

  // After the animation finishes, reset to -150% to prepare for next open
  navLinks.addEventListener("transitionend", function resetPosition() {
    navLinks.style.transition = "none";
    navLinks.style.transform = `translateX(-200%)`;
    navLinks.style.opacity = "0";
    navLinks.style.visibility = "hidden";

    void navLinks.offsetWidth;

    navLinks.style.transition = "transform 0.4s ease";
    navLinks.style.opacity = "1";
    navLinks.style.visibility = "visiblegit add";

    header.classList.remove("header-mobile");

    // Remove the event listener after running once
    navLinks.removeEventListener("transitionend", resetPosition);
  });
});
