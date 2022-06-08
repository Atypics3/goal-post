const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

// overwrites default Express handler and uses custom one
app.use(errorHandler);

// listens for specified port
app.listen(port, () => console.log(`server started on port ${port}`));
