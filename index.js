const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url && req.url.includes("favicon")) return res.end();
  // For local Time
  const requestTime = new Date();
  const localTime = new Date(requestTime.getTime() + 6 * 60 * 60 * 1000);
  const gmt6String = localTime.toISOString().replace("T", " ").split(".")[0];
  // local time end
  const log = `request Time: { ${gmt6String} } and thing: {${req.url}}: new request in server\n`;
  const Myurl = url.parse(req.url, true);
  console.log(Myurl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (Myurl.pathname) {
      case "/":
        res.end("Home page");
        break;
      case "/search":
        const searchThing = Myurl.query.search_query;
        res.end("Here are your result for " + searchThing);
        break;
      case "/about":
        const userName = Myurl.query.Name;
        res.end(`Hi, I am ${userName}`);
        break;
      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(8000, () => console.log("server started"));
