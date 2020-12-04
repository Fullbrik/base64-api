import express from "express";
import base64 from "base-64";
import utf8 from "utf8";

const port: number = 3000;

const app = express();

app.get("/decode/:base64", (req, res) => {
	var decoded = base64.decode(req.params.base64);
	var text = utf8.decode(decoded);
	res.send(text);
});

app.get("*", (req, res) => {
    res.send('Please put a bse64 string into url.');
});

app.listen(process.env.PORT || port);

console.log("Now listening on port " + process.env.PORT || port);
