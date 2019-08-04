const express = require("express");
const exphbs = require("express-handlebars");

// Init Express
const app = express();

// Express body parser
app.use(express.urlencoded({ extended: true }));

// JSON body parser
app.use(express.json());

// Handlebars templating engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Routes
app.use("/", require("./routes/index.js"));
app.use('/public', express.static('public'));

// If the route can't be found then show the 404 page
app.get("*", function(req, res) {
  res.status(404).render("404");
});

// Sets the port
const PORT = process.env.PORT || 5000;

// Starts the server and listens for requests
app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`));
