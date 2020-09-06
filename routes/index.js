const router = require("express").Router();

const Url = require("../models/Url");

/**
 * @name /:code
 * @method GET
 * @description Redirect to long/original URL
 */
router.get("/:code", async (req, res) => {
	try {
		const url = await Url.findOne({ urlCode: req.params.code });

		if (url) {
			return res.redirect(url.longUrl);
		} else {
			return res.status(404).json({
				status: 404,
				message: "No url found",
			});
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({
			status: 500,
			message: "Server error",
		});
	}
});

module.exports = router;
