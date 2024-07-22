document.addEventListener('DOMContentLoaded', function() {
    const weatherForm = document.getElementById('weatherForm');
    const cityInput = document.getElementById('city');
    const weatherInfo = document.getElementById('weatherInfo');

    weatherForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const city = cityInput.value.trim();

        if (city !== '') {
            const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('City not found');
                    }
                    return response.json();
                })
                .then(data => {
                    const weatherHtml = `
                        <h3>${data.name}, ${data.sys.country}</h3>
                        <p>Temperature: ${data.main.temp} &deg;C</p>
                        <p>Weather: ${data.weather[0].main}</p>
                    `;
                    weatherInfo.innerHTML = weatherHtml;
                })
                .catch(error => {
                    weatherInfo.innerHTML = `<p>${error.message}</p>`;
                });
        }
    });
});
