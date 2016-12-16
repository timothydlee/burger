/*
Setting up server file. Express Middleware
*/

//Declaring all dependencies
var express 		= require("express");
var bodyParser 		= require("body-parser");
var methodOverride 	= require("method-override");
var exphbs 			= require("express-handlebars");
// var connection		= require("./app/config/connection.js");
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

var port = 3000;
app.listen(process.env.PORT || port, function() {
	console.log("Listening to port: " + port);
});