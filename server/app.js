const express = require("express");
const app = express();

app.use(express.static(__dirname + "/../client"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../client/index.html");
});
app.get("/data", (req, res) => {
  res.send("data");
});
app.listen(3000);
