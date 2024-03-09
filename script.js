// const apiKey = 'daf437a825d311b0b2874c0cb7132b9c'; // Replace with your actual API key
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API key}';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const imgWeather = document.getElementById('')

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const apiKey = 'daf437a825d311b0b2874c0cb7132b9c'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            switch (data.weather[0].main) {
                case clear:
                    background: url(image/clear_sky.png);
                    break;
                case haze:
                        background: url(image/cloudy.png);
                        break;   
            
                default:
                    break;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
