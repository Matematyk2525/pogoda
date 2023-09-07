import mongoose from "mongoose";

const Model = mongoose.model("hour", {
	city: String,
	temp: String,
	feels_like: String,
	pressure: Number,
	humidity: Number,
	clouds: Number,
	desc: String,
	time: String,
});

export default Model;
