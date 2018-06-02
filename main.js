const express = require('express');
const app = this.app = express();
var port = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
var cats = require("cats-js");
var catapi = new cats();

app.get("/", function (req, res){
	res.send(`{\n	"error": "Unknown api endpoint '/'"\n}`);
}).get("/cat", function (req, res){
	catapi.get().then((cat) => {
		res.send(cat);
	});
}).listen(port, function() {
	console.log("listening on port " + port);
});
