// OpenWeather API Key
const apiKey = "8ff39ac7a9b5be6dcf660eb9f5c7392f";

// Get Search Button
const searchBtn = document.getElementById("searchBtn");

// Search when button is clicked
searchBtn.addEventListener("click", getWeather);

// Fetch Weather Data
async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != "200") {
            alert("City not found!");
            return;
        }

        // Display Weather Data
        document.getElementById("cityName").innerHTML = data.name;
        document.getElementById("temp").innerHTML = data.main.temp + " °C";
        document.getElementById("description").innerHTML = data.weather[0].description;
        document.getElementById("humidity").innerHTML = data.main.humidity + " %";
        document.getElementById("wind").innerHTML = data.wind.speed + " m/s";
        document.getElementById("pressure").innerHTML = data.main.pressure + " hPa";
        document.getElementById("feels").innerHTML = data.main.feels_like + " °C";

        // Weather Icon
        document.getElementById("icon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {

        console.error(error);
        alert("Something went wrong. Please try again.");

    }

}