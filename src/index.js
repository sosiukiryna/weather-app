// Change city API

function displayTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp-value").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "3ca6e5ceb5158d6713f78b08dc15cd96";
  let searchInput = document.querySelector("#search-text-input");
  let city = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

function searchLocation(position) {
  let apiKey = "3ca6e5ceb5158d6713f78b08dc15cd96";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}
function showLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", showLocation, false);

let now = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

let h2 = document.querySelector(".time");
h2.innerHTML = formatDate(now);

//Challenge 3

//function convertC(event) {
//event.preventDefault();
// let cValue = document.querySelector("#temp-value");
//cValue.innerHTML = 18;
//}

//let c = document.querySelector("#degC");
//c.addEventListener("click", convertC);

//function convertF(event) {
//event.preventDefault();
//let fValue = document.querySelector("#temp-value");
//fValue.innerHTML = 64;
//}

//let f = document.querySelector("#degF");
//f.addEventListener("click", convertF);
