document.getElementById("searchForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    let city = document.getElementById("submi").value;
	document.getElementById("cityHeading").innerText=`Weather for ${city}`


    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '25348a3c4cmshc87eb45fe3c2832p1299dcjsncfd531f31445',
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        const sky = result.sys;
        const wind = result.wind;
        const main = result.main;

        document.getElementById("feels_like").innerHTML = (main.feels_like - 273.15).toFixed(2) + " °C";
        document.getElementById("humidity").innerHTML = main.humidity + " %";
        document.getElementById("pressure").innerHTML = main.pressure + " hPa";
        document.getElementById("sea_level").innerHTML = main.sea_level + " hPa";
        document.getElementById("temp").innerHTML = (main.temp - 273.15).toFixed(2) + " °C";
        document.getElementById("tem").innerHTML = (main.temp - 273.15).toFixed(2) + " °C";
        document.getElementById("temp_max").innerHTML = (main.temp_max - 273.15).toFixed(2) + " °C";
        document.getElementById("temp_min").innerHTML = (main.temp_min - 273.15).toFixed(2) + " °C";

        document.getElementById("deg").innerHTML = wind.deg;
        document.getElementById("speed").innerHTML = wind.speed;

        // Convert sunrise/sunset timestamps
        const sunriseDate = new Date(sky.sunrise * 1000);
        const sunsetDate = new Date(sky.sunset * 1000);

        const sunriseTime = sunriseDate.toLocaleTimeString("en-IN", {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        const sunsetTime = sunsetDate.toLocaleTimeString("en-IN", {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        document.getElementById("sunrise").innerHTML = sunriseTime;
        document.getElementById("sunset").innerHTML = sunsetTime;

    } catch (error) {
        console.error("API call failed:", error);
    }
});

