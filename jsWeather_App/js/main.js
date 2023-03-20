const getWeather = async () => {
  const cityInput = document.getElementById("city").value;
  const apiValue = apiKey;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiValue}`
    );

    const data = await response.json();
    console.log(data);

    const tempF = ((data.main.temp - 273.15) * 9) / 5 + 32;
    const tempMaxF = ((data.main.temp_max - 273.15) * 9) / 5 + 32;
    const tempMinF = ((data.main.temp_min - 273.15) * 9) / 5 + 32;
    const forecast = data.weather[0].description;
    const capitalizedForecast = forecast.charAt(0).toUpperCase() + forecast.slice(1);
    const humidity = data.main.humidity;

    const cityName = document.getElementById("city-name");
    const tempDisplay = document.getElementById("temp");
    const tempMaxDisplay = document.getElementById("temp-max");
    const tempMinDisplay = document.getElementById("temp-min");
    const forecastDisplay = document.getElementById("forecast");
    const humidityDisplay = document.getElementById("humidity");

    cityName.textContent = data.name;
    tempDisplay.textContent = `${tempF.toFixed(2)} °F`;
    tempMaxDisplay.textContent = `${tempMaxF.toFixed(2)} °F`;
    tempMinDisplay.textContent = `${tempMinF.toFixed(2)} °F`;
    forecastDisplay.textContent = capitalizedForecast;
    humidityDisplay.textContent = `${humidity}%`;

    document.querySelector(".table").style.display = "table"

    document.getElementById("city").value = "";
  } catch (error) {
    console.log(error);
  }
};
