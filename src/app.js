function refreshWeatherData(response){
  // console.log(response.data.temperature.current);
  let temperatureElement=document.querySelector("#temperature");
  let temperature=response.data.temperature.current;
  temperatureElement.innerHTML=Math.round(temperature);
  let cityElement=document.querySelector("#city");
  cityElement.innerHTML=response.data.city;
  console.log(response.data.condition.description);
  let descriptionElement=document.querySelector("#description");
 descriptionElement.innerHTML=response.data.condition.description;
//  console.log(response.data);
let humidityElement=document.querySelector("#humidity");
humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
// console.log(response.data);
let windElement=document.querySelector("#wind");
windElement.innerHTML=`${response.data.wind.speed}km/h`;

let timeElement=document.querySelector("#time");
let date=new Date(response.data.time * 1000);
timeElement.innerHTML= formatDate(date);
console.log(response.data);
let iconElement=document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city){

  let apiKey="9a708b23a8ct6o0b4d94fd3134a86038"
  // let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeatherData)
}


// receives an event
function submitButton(event){
  // this prevents from changes in the webpage even if the you reload the web page
  event.preventDefault();

  let searchInput=document.querySelector("#search-form-input");
  
  
  searchCity(searchInput.value)
}

let searchelement=document.querySelector("#search-name");
searchelement.addEventListener("submit" , submitButton);
searchCity("Nairobi");