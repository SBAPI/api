const express = require('express');
const app = this.app = express();
var cats = require("cats-js");
var catapi = new cats();
 
app.get("/cat", function (req, res){
	catapi.get().then((cat) => {
		res.send(cat);
	});
});

app.listen(3000);
console.log("listening on port 3000");
