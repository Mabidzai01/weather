const apikey = '6a288a74b2a7989e101e65e0eabe7ad7'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchweather(location);
    }
});
function fetchweather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apikey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement, textcontent = data.name;
            temperatureElement, textcontent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });


}

