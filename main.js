const express = require('express');
const app = this.app = express();
var cats = require("cats-js");
var catapi = new cats();
 
app.get("/cat", function (req, res){
	catapi.get().then((cat) => {
		res.send(cat);
	});
});

app.get("/", function (req, res){
	res.send(`{\n	"error": "Unknown api endpoint '/'"\n}`);
});

var port = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
app.listen(port);
console.log("listening on port " + port);
