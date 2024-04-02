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

// WEATHER CARD
const apiKey = "2ebf6805d9b7118cfce23cf5f9499cd8";
const weatherCard = document.getElementById("weatherCard");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const locationElement = document.getElementById("location");
const temperatureProgressBar = document.getElementById(
  "temperatureProgressBar"
);

// Coordinates for Kagarko, Nigeria
const kagarkoLatitude = 9.5944;
const kagarkoLongitude = 7.6785;

// Function to get the weather for Kagarko
function getKagarkoWeather() {
  // Fetch current weather data for Kagarko
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${kagarkoLatitude}&lon=${kagarkoLongitude}&appid=${apiKey}`;
  fetchWeatherData(currentWeatherUrl);
}

// Function to fetch weather data and update the DOM
function fetchWeatherData(apiUrl) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      weatherIcon.src = iconUrl;
      temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
      description.textContent = data.weather[0].description;
      locationElement.textContent = data.name;

      // Create circular progress bar for temperature
      createCircularProgressBar(Math.round(data.main.temp - 273.15));
    })
    .catch((error) =>
      console.error("Error fetching current weather data:", error)
    );
}

// Function to create a circular progress bar using ProgressBar.js
function createCircularProgressBar(temperature) {
  const progressBar = new ProgressBar.Circle(temperatureProgressBar, {
    color: "#3498db",
    strokeWidth: 10,
    trailWidth: 5,
    text: {
      value: `${temperature}°C`,
      style: {
        color: "#555",
        fontSize: "16px",
      },
    },
    duration: 1500,
    easing: "easeInOut",
  });

  // Animate the progress bar based on the temperature
  const percentage = temperature / 40; // Assuming a maximum temperature of 40°C
  progressBar.animate(percentage);
}

// Call the function to get the weather for Kagarko
getKagarkoWeather();
