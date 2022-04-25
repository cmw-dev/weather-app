function showCurrentTemp(response) {
  let temp = document.querySelector("#current-temp");
  temp.innerHTML = Math.round(response.data.main.temp) + "°";
  let location = document.querySelector("#current-city");
  location.innerHTML = response.data.name;
  let description = document.querySelector("#weather-description");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let feels = document.querySelector("#feels-like");
  feels.innerHTML = Math.round(response.data.main.feels_like);
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed) + " mph";
  let iconElement = document.querySelector("#icon-description");
  iconElement.setAttribute("src", `icons/${response.data.weather[0].icon}.png`);
  iconElement.setAttribute("alt", response.data.weather[0].description);

  fahrenheitTemperature = response.data.main.temp;
}

function search(city) {
  let apiKey = "63d02659b2e2665ee910b0246bed0772";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showCurrentTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#search-city");
  search(cityElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Sioux Falls");

//

function showPosition(position) {
  let apiKey = "63d02659b2e2665ee910b0246bed0772";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showCurrentTemp);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let locationButton = document.querySelector("#current-location-button");
locationButton.addEventListener("click", getCurrentPosition);
//
let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
minutes = minutes <= 9 ? "0" + minutes : minutes;
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[now.getDay()];
let h4 = document.querySelector("h4");
h4.innerHTML = `${currentDay} ${hour}:${minutes}`;

//

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature) + "°";
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  let celsiusTemp = (fahrenheitTemperature - 32) * (5 / 9);
  temperatureElement.innerHTML = Math.round(celsiusTemp) + "°";
}

let fahrenheitTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-current");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-current");
celsiusLink.addEventListener("click", convertToCelsius);
