const express = require("express");
const mysql = require("mysql");
const cors = require("cors");



const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Succeed" });
});

app.get("/kamis", (req, res) => {
  const data = {
id:1,
	nrp:"3121500006",
	nama:"Mohamad Faizal Norhavid",
	hari:"kamis",
	tanggal: "6 Juni 2023"
	};
    res.json(data);
});

app.listen(port, () => {
  console.log("Server started on port 5000");
});
