import express, { json } from "express";
import mongoose from "mongoose";
import Model from "./model.js";
import fetchWeather from "./fetchWeather.js";

const data = fetchWeather();

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/pogoda_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", () => console.log("Bład połączenia"));
database.once("open", () => {
	console.log("Połaczono z bazą danych");
});

app.get("/dane-pogodowe", async (req, res) => {
	const data = await Model.find();
	res.json(data);
});

app.listen(5000, () => {
	console.log("Udało się właczyć serwer");
});
