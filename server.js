var express = require("express");
var app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardList = [
  {
    title: "Hurricanes",
    image: "images/hurricane.jpeg",
    link: "About hurricanes",
    desciption: "Demo desciption about hurricanes",
  },
  {
    title: "Tsunamis",
    image: "images/tsunami-wave.jpg",
    link: "About trusnamis",
    desciption: "Demo desciption about tsunamis",
  },
  {
    title: "Tornados",
    image: "images/tornado.webp",
    link: "About tornados",
    desciption: "Demo desciption about tornadoes",
  },
];

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.get("/api/projects", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});
