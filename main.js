//const express = require('express');
//const app = this.app = express();
const http = require('http');
var port = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
var cats = require("cats-js");
var catapi = new cats();

http.createServer(function(request, response){
	catapi.get().then((cat) => {
		response.send(cat);
	});
}).listen(port);
console.log("listening on port " + port);
