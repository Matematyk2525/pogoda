import mongoose from "mongoose";

const Model = mongoose.model("hour", {
	temperatura: Number,
	miasto: String,
	opis: String,
});

export default mongoose;
