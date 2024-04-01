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

document.addEventListener("DOMContentLoaded", function () {
  // Hide all cards initially
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Function to show a specific card based on ID
  function showCard(cardId) {
    const targetCard = document.getElementById(cardId);
    if (targetCard) {
      // Hide all cards first
      cards.forEach((card) => {
        card.style.display = "none";
      });
      // Show the target card
      targetCard.style.display = "block";
    }
  }

  // Add click event listener to each nav link
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute("title")
        .toLowerCase()
        .replace(/ /g, "-");
      showCard(targetId);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch weather data and display in the widget
  function fetchWeatherData() {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = "2ebf6805d9b7118cfce23cf5f9499cd8";
    const city = "YourCity"; // Replace 'YourCity' with the name of your city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract relevant weather data
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        // Create HTML for weather widget
        const widgetContainer = document.querySelector(".widget");
        const weatherHTML = `
          <h2>Weather</h2>
          <p>Temperature: ${temperature}°C</p>
          <p>Description: ${weatherDescription}</p>
        `;

        // Update widget with weather data
        widgetContainer.innerHTML = weatherHTML;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }

  // Call the fetchWeatherData function when the DOM content is loaded
  fetchWeatherData();
});
