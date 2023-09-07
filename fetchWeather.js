import fetch from "node-fetch";

const API = "275e3f4b3b1c6f88896e06f53d4fde8a";
const CITY = "Warszawa";

const fetchWeather = async () => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API}`
	);
	const data = await response.json();

	console.log(data);
};

export default fetchWeather;
