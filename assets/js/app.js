
const weatherButton = document.getElementById("weather-button");
weatherButton.addEventListener('click', () => {
    const cityName = document.getElementById("weatherInput").value.trim();

    const apiKey = `9cd75460796a372a8fe7e8fd33021d73`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => weatherInfo(data))

})

const weatherInfo = (data) => {
    console.log(data)
  const description = data.weather[0].description;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

    const weatherInfo = document.querySelector(".weather-info");
    weatherInfo.innerHTML = `

    <h2 class="my-3">Description : ${description}</h2>
    <h3> Temperature : ${temperature} &#8451</h3>
    <p>Humidity : ${humidity} %</p>
    <p>WindSpeed : ${windSpeed} m/s</p>

    `;
    document.getElementById("weatherInput").value='';
}