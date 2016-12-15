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
app.engine("handlebars", exphbs({ 
	defaultLayout: "main" 
}));
app.set("view engine", "handlebars");

// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM movies;", function(err, data) {
//     if (err) throw err;
//     res.render("index", { movies: data });
//   });
// });

// app.post("/create", function(req, res) {
//   connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.plan], function(err, result) {
//     if (err) throw err;
//     res.redirect("/");
//   });
// });

// app.delete("/delete", function(req, res) {
//   connection.query("DELETE FROM movies WHERE id = ?", [req.body.id], function(err, result) {
//     if (err) throw err;
//     res.redirect("/");
//   });
// });

// app.put("/update", function(req, res) {
//   connection.query("UPDATE plans SET movie = ? WHERE id = ?", [
//     req.body.plan, req.body.id
//   ], function(err, result) {
//     if (err) throw err;
//     res.redirect("/");
//   });
// });
// var routes = require ("./app/controllers/burgers_controller.js");
// app.use ("/", routes);

var port = process.env.port || 3000;
app.listen(port, function() {
	console.log("Listening to port: " + port);
});

