import fetch from "node-fetch";

const API = "275e3f4b3b1c6f88896e06f53d4fde8a";
const CITY = "Warszawa";

const currentDate = () => {
	const date = new Date();
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	const hour = String(date.getHours()).padStart(2, "0");
	const minute = String(date.getMinutes()).padStart(2, "0");

	const formattedDate = `${day}-${month}-${year} ${hour}:${minute}`;
	return formattedDate;
};

const fetchWeather = async () => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API}`
	);
	const data = await response.json();
	const weather = {
		city: data.name,
		temp: (data.main.temp - 273.15).toFixed(),
		feels_like: (data.main.feels_like - 273.15).toFixed(),
		pressure: data.main.pressure,
		humidity: data.main.humidity,
		clouds: data.clouds.all,
		desc: data.weather[0].description,
		time: currentDate(),
	};
	return weather;
};

export default fetchWeather;
