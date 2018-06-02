const express = require('express');
const app = this.app = express();
var cats = require("cats-js");
var catapi = new cats();
 
app.get("/json/cat", function (req, res){
	catapi.get().then((cat) => {
		res.send(cat);
	});
});

