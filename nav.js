const nav = document.querySelector(".primary-navigation");
const toggleBtn = document.querySelector(".mobile-nav-toggle");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".primary-navigation a");
const currentNavLink = document.querySelector(".primary-navigator a.active");

toggleBtn.addEventListener("click", (e) => {
  const navVisibile = nav.getAttribute("data-visible") === "true";
  if (navVisibile) {
    nav.setAttribute("data-visible", "false");
    toggleBtn.setAttribute("aria-expanded", "false");
    overlay.setAttribute("aria-expanded", "false");
  } else {
    nav.setAttribute("data-visible", "true");
    toggleBtn.setAttribute("aria-expanded", "true");
    overlay.setAttribute("aria-expanded", "true");
  }
});

overlay.addEventListener("click", (e) => {
  nav.setAttribute("data-visible", "false");
  toggleBtn.setAttribute("aria-expanded", "false");
  overlay.setAttribute("aria-expanded", "false");
});

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
