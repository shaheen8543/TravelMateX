/* ===== WEATHER.JS ===== */

const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Replace with real key
const URL = 'https://api.openweathermap.org/data/2.5/weather';

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');
    const weatherCard = document.getElementById('weatherCard');
    const errorMsg = document.getElementById('errorMsg');

    // DOM Elements for Weather Data
    const cityName = document.getElementById('cityName');
    const dateElement = document.getElementById('date');
    const tempElement = document.getElementById('temp');
    const descElement = document.getElementById('description');
    const iconElement = document.getElementById('weatherIcon');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind');
    const pressureElement = document.getElementById('pressure');

    const updateDate = () => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    };

    const getMockData = (city) => {
        // Fallback for portfolio showcase without real API key
        const weatherTypes = ['Clear', 'Clouds', 'Rain', 'Snow', 'Thunderstorm'];
        const main = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        let iconCode = '01d';
        if(main === 'Clouds') iconCode = '03d';
        if(main === 'Rain') iconCode = '09d';
        if(main === 'Snow') iconCode = '13d';
        if(main === 'Thunderstorm') iconCode = '11d';

        return {
            name: city.charAt(0).toUpperCase() + city.slice(1),
            sys: { country: 'Mock' },
            main: {
                temp: Math.floor(Math.random() * 35),
                humidity: Math.floor(Math.random() * 50) + 40,
                pressure: Math.floor(Math.random() * 100) + 1000
            },
            wind: {
                speed: (Math.random() * 20).toFixed(1)
            },
            weather: [{
                main: main,
                description: `${main.toLowerCase()} conditions`,
                icon: iconCode
            }]
        };
    };

    const fetchWeather = async (city) => {
        try {
            errorMsg.style.display = 'none';
            weatherCard.style.display = 'none';
            weatherCard.classList.remove('has-data');

            // Attempt real API call (will fail if API_KEY is dummy)
            const response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
            let data;
            if (response.ok) {
                data = await response.json();
            } else {
                // Use Mock Data if API key is invalid
                console.warn('API Key invalid or missing. Using mock data for portfolio showcase.');
                data = getMockData(city);
                if (!cityInput.value) data = null; // Prevent empty search success
            }

            if(data) {
                cityName.textContent = `${data.name}, ${data.sys.country}`;
                updateDate();
                tempElement.textContent = Math.round(data.main.temp);
                descElement.textContent = data.weather[0].description;
                iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                humidityElement.textContent = `${data.main.humidity}%`;
                windElement.textContent = `${data.wind.speed} km/h`;
                pressureElement.textContent = `${data.main.pressure} hPa`;

                weatherCard.style.display = 'block';
                // Trigger reflow
                void weatherCard.offsetWidth;
                weatherCard.classList.add('has-data');
            } else {
                throw new Error("City not found");
            }

        } catch (error) {
            console.error(error);
            errorMsg.style.display = 'block';
            weatherCard.style.display = 'none';
        }
    };

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) {
                fetchWeather(city);
            }
        }
    });
});
