const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Kolkata';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '25348a3c4cmshc87eb45fe3c2832p1299dcjsncfd531f31445',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

const api= async ()=>{
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
} 

api()