var express = require("express");
var app = express();

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

app.get("/api/projects", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});
