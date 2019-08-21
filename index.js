const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose")
const db = require("./config/db").mongoURI;
<<<<<<< HEAD
const passport = require('passport');
const session = require('express-session')
const MongoStore = require("connect-mongo")(session);

=======
>>>>>>> 5654f12615a2905538b4626a65c39025fc3ae2d4

// Init Express
const app = express();

require("./config/passport")(passport);

// Express body parser
app.use(express.urlencoded({ extended: true }));

// JSON body parser
app.use(express.json());

// Handlebars templating engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");


<<<<<<< HEAD


// Sets static assets folder
app.use('/public', express.static('public'));
=======
// Static Directory
app.use(express.static("public"));
>>>>>>> 5654f12615a2905538b4626a65c39025fc3ae2d4

//database
mongoose
.connect(db, {useNewUrlParser:true})
.then(() => console.log("Connection Successfull") )
.catch(err => console.log(`Err is ${err}`))

// Initialise express-session
app.use(
  session({
    secret: "secret",
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes - Nothing after this
app.use("/", require("./routes/index.js"));

// If the route can't be found then show the 404 page
app.get("*", function(req, res) {
  res.status(404).render("404");
});

// Sets the port
const PORT = process.env.PORT || 5000;

// Starts the server and listens for requests
app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`));
