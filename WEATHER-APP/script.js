const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Kolkata';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '25348a3c4cmshc87eb45fe3c2832p1299dcjsncfd531f31445',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

const api = async () => {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);

		
		
		// const sky=result.sys
		// const wind=result.wind
		const main = result.main;
		
		// document.getElementById("feels_like").innerHTML = (main.feels_like - 273.15).toFixed(2) + " °C";
		// document.getElementById("humidity").innerHTML = main.humidity + " %";
		// document.getElementById("pressure").innerHTML = main.pressure + " hPa";
		// document.getElementById("sea_level").innerHTML = main.sea_level + " hPa";
		document.getElementById("temp").innerHTML = (main.temp - 273.15).toFixed(2) + " °C";
		document.getElementById("tem").innerHTML = (main.temp - 273.15).toFixed(2) + " °C";
		 document.getElementById("temp_max").innerHTML = (main.temp_max - 273.15).toFixed(2) + " °C";
		 document.getElementById("temp_min").innerHTML = (main.temp_min - 273.15).toFixed(2) + " °C";
		// document.getElementById("deg").innerHTML = wind.deg;
		// document.getElementById("speed").innerHTML = wind.speed;
		// document.getElementById("sunrise").innerHTML = sky.sunrise;
		// document.getElementById("sunset").innerHTML = sky.sunset;
		
	} catch (error) {
		console.error(error);
	}
}
api()