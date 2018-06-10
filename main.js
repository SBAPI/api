//const express = require('express');
//const app = this.app = express();
const http = require('http');
var port = 3000;
var cats = require("cats-js");
var catapi = new cats();

http.createServer(function(request, response){
	catapi.get().then((cat) => {
		response.send(cat);
	});
}).listen(port);
console.log("listening on port " + port);
