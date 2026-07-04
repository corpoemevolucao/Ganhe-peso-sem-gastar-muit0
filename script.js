const menuToggle = document.querySelector("#menuToggle");
const menu = document.querySelector("#menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

document.querySelectorAll(".faq-q").forEach(button => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.14 });

revealElements.forEach(element => observer.observe(element));

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.style.background = window.scrollY > 80 ? "rgba(0,0,0,0.96)" : "rgba(9,9,9,0.9)";
});
