function showCurrentTemp(response) {
  let temp = document.querySelector("#current-temp");
  temp.innerHTML = Math.round(response.data.main.temp) + "°";
  let location = document.querySelector("#current-city");
  location.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let feels = document.querySelector("#feels-like");
  feels.innerHTML = Math.round(response.data.main.feels_like);
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed) + " mph";
  console.log(response.data);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  let apiKey = "63d02659b2e2665ee910b0246bed0772";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showCurrentTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
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

if (minutes < 10) {
  minutes = "0" + min;
} else {
  minutes = minutes + "";
}
let currentDay = days[now.getDay()];
let h4 = document.querySelector("h4");
h4.innerHTML = `${currentDay} ${hour}:${minutes}`;

//
