const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.listen(3000, function() {
	console.log("listening port ");
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/FizzBuzz", (req, res) => {

	if (req.body.name.trim() == "") {
		res.send("Test Field is empty!");
		res.sendFile(__dirname + "/index.html");
	}

	var finalOutput = "";
	var array = req.body.name.split(",");

	array.forEach(function(value) {
		if (isNaN(value) || isNaN(parseInt(value))) {
			finalOutput += "Invalid item<br />";
		} else if (value % 15 == 0) {
			finalOutput += "FizzBuzz<br />";
		} else if (value % 5 == 0) {
			finalOutput += "Buzz<br />";
		} else if (value % 3 == 0) {
			finalOutput += "Fizz<br />";
		} else {
			finalOutput +=
				"Divided " + value + " by 3 <br /> Divided " + value + " by 5 <br />";
		}
	});

	finalOutput = "<h4> Input is </h4>[" + req.body.name + "]<br />  <h4> Output is </h4><p>" + finalOutput + "</p>";

	res.send(finalOutput);
	res.sendFile(__dirname + "/index.html");
});