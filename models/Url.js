const { model, Schema } = require("mongoose");

const urlSchema = new Schema({
	urlCode: {
		type: String,
		required: true,
	},
	longUrl: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		default: Date.now,
	},
});

module.exports = model("Url", urlSchema);
