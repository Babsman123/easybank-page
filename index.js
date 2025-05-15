//HEADER INTERSECTION
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const menu = [...document.querySelectorAll(".menu")];
const navLinks = document.querySelector(".nav__links");
const menuOpen = document.querySelector(".menu__icon--open");
const menuClose = document.querySelector(".menu__icon--close");

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

// menu.forEach((menu) => {
//   menu.addEventListener("click", () => {
//     // console.log(navLinks);
//     header.classList.toggle("header-mobile");
//     // navLinks.classList.add("nav__links--open");

//     if ((menuClose.style.display = "block")) {
//       navLinks.style.transform = `translateX(0)`;
//       console.log("hello");
//     }
//   });
// });

menuOpen.addEventListener("click", () => {
  header.classList.toggle("header-mobile");
  navLinks.style.transform = `translateX(0)`;
});
menuClose.addEventListener("click", () => {
  header.classList.toggle("header-mobile");
  navLinks.style.transform = `translateX(150%)`;
});
