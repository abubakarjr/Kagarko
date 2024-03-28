document.addEventListener("DOMContentLoaded", function () {
  const toggleAside = document.getElementById("toggleAside");
  const aside = document.querySelector("aside");

  toggleAside.addEventListener("click", function () {
    aside.classList.toggle("hidden");
  });

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(function (link) {
    const spanText = link.querySelector("span").textContent;
    link.setAttribute("title", spanText);
  });
});
