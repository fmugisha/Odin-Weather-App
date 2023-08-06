const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const ville = document.querySelector('.ville');
const country = document.querySelector('.pays');
const weather_img = document.querySelector('.weather-img');
const celcDisplay = document.getElementById('celc-display');
const fahrDisplay = document.getElementById('fahr-display');
const currentCondition = document.querySelector('.condition');
const fahr = document.getElementById('fahr');
const celc = document.getElementById('celc');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city){
    const api_key = "700906904c824b3ab9194941230508";
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=yes`;
    
    const response = await fetch(`${url}`)
    const weather_data = await response.json();

    ville.textContent = `${weather_data.location.name}`;
    country.textContent = `${weather_data.location.country}`;
    weather_img.src = `${weather_data.current.condition.icon}`;
    celcDisplay.textContent = `${weather_data.current.temp_c}°C`;
    fahrDisplay.textContent = `${weather_data.current.temp_f}°F`;
    currentCondition.textContent = `${weather_data.current.condition.text}`;

    humidity.textContent = `${weather_data.current.humidity}%`;
    wind_speed.textContent = `${weather_data.current.wind_kph}Km/H`;

    console.log(weather_data);
}


searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});

fahr.addEventListener('click', () => {
    celcDisplay.style.display = "none";
    celc.style.backgroundColor = "transparent";
    fahrDisplay.style.display = "block";
    fahr.style.backgroundColor = "#3ea2f3bb";
});

celc.addEventListener('click', () => {
    fahrDisplay.style.display = "none";
    fahr.style.backgroundColor = "transparent";
    celcDisplay.style.display = "block";
    celc.style.backgroundColor = "#3ea2f3bb";
});