document.addEventListener("DOMContentLoaded", function () {
  const toggleAside = document.getElementById("toggleAside");
  const aside = document.querySelector("aside");

  toggleAside.addEventListener("click", function () {
    // Toggle visibility of spans within nav-links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(function (link) {
      const span = link.querySelector("span");
      span.classList.toggle("hidden");
    });
  });

  // Iterate through each nav link
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(function (link) {
    const span = link.querySelector("span");
    const spanText = span.textContent;
    link.setAttribute("title", spanText);

    // Hide span by default
    span.classList.add("hidden");

    // Add click event listener to each nav link
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute("title")
        .toLowerCase()
        .replace(/ /g, "-");
      const targetCard = document.getElementById(targetId);

      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
