document.addEventListener("DOMContentLoaded", function () {
  const toggleAside = document.getElementById("toggleAside");
  const aside = document.querySelector("aside");

  toggleAside.addEventListener("click", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(function (link) {
      const span = link.querySelector("span");
      span.classList.toggle("hidden");
    });
  });

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(function (link) {
    const span = link.querySelector("span");
    const spanText = span.textContent;
    link.setAttribute("title", spanText);
  });
});
