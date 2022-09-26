const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./backend/middleware/errorMiddleware");
const connectDB = require("./backend/config/db");
const port = process.env.PORT;
const path = require("path");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./backend/routes/goalRoutes"));
app.use("/api/users", require("./backend/routes/userRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
	// static assets
	app.use(express.static(path.join(__dirname, "frontend/build")));

	// loads frontend/build/index.html
	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
	);
} else {
	// if not set in production
	app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
