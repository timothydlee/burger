var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res) {
	res.redirect('/burgers');
})

router.get('/burgers', function(req, res) {
	burger.selectAll(function(response) {
		var hbsObject = {
			burgers: response
		};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res) {
	burger.insertOne([
		'burger_name', 'devoured'
	], [
		req.body.burger_name, req.body.devoured
	], function() {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect('/burgers');
	});
});

module.exports = router;