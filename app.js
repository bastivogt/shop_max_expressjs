const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");

const LoggerMiddleware = require("./src/middlewares/LoggerMiddleware");


const app = express();
const host = "http://localhost";
const port = 8042


// Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));


// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules", "bootstrap", "dist" )));
app.use(bodyParser.urlencoded({ extended: true }));
// Custom
app.use(LoggerMiddleware.log);

// Routes
app.use(shopRoutes);
app.use(adminRoutes);
// 404
app.use("/", (req, res) => {
    res.status(404).send("404");
});


app.listen(port, () => {
    console.log(`App listen on ${host}:${port}`);
});
