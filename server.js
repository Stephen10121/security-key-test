const express = require("express");
const http = require("http");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const u2f = require("u2f");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
	res.json({ msg: "Good. Hello world." });
});


http.createServer(app).listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
