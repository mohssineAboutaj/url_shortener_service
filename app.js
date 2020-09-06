// import dependencies
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// use some constants
const PORT = process.env.PORT || 5000;

// init express app
const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);

// Define Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
