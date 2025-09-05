const http = require("http");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from Homepage");
});
app.get("/about", (req, res) => {
  return res.send("This is for about section");
});

const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("server started"));
