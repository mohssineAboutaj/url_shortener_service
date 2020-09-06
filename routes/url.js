const router = require("express").Router();
const { isUri } = require("valid-url");
const { generate } = require("shortid");
const config = require("config");

const Url = require("../models/Url");

/**
 * @name /api/url/shorten
 * @method POST
 * @description Create short URL
 */
router.post("/shorten", async (req, res) => {
	const { longUrl } = req.body;
	const baseUrl = config.get("baseUrl");

	// Check base url
	if (!isUri(baseUrl)) {
		return res.status(401).json({
			status: 401,
			message: "Invalid base url",
		});
	}

	// Create url code
	const urlCode = generate();

	// Check long url
	if (isUri(longUrl)) {
		try {
			let url = await Url.findOne({ longUrl });

			if (url) {
				res.json(url);
			} else {
				const shortUrl = baseUrl + "/" + urlCode;

				url = new Url({ longUrl, shortUrl, urlCode });

				await url.save();

				res.json(url);
			}
		} catch (err) {
			console.error(err);
			res.json({
				status: 500,
				message: "Server error",
			});
		}
	} else {
		res.json({
			status: 401,
			message: "Invalid long url",
		});
	}
});

module.exports = router;
