const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from Homepage." + " hey " + req.query.name);
});
app.get("/about", (req, res) => {
  return res.send("This is for about section");
});

app.get("/signup", (req, res) => {
  return res.send(
    "This is a signup form. Do you want to make any DBMS query in this"
  );
});

app.listen(8000, () => {
  console.log("server started");
});
