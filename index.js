//HEADER INTERSECTION
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const menuOpen = document.querySelectorAll(".menu");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

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

menuOpen.forEach((menu) => {
  menu.addEventListener("click", () => {
    console.log("Hello world");
  });
});
