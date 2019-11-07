const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const qs = require("qs");
const PORT = process.env.PORT || 4000;
const crypto = require("crypto");
const { parseClass, getData, parseGetLeftSeat, detect } = require("./api");
const tracker = [];

app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.send(`
  It's hufNiper's API server by eaTnuGkraP. Let's snipe!`);
});

app.post("/api/getList", async (req, res) => {
  const html = await getData(qs.stringify(req.body));
  res.send(parseClass(html.data));
});

app.post("/api/getLeftSeat", async function(req, res) {
  const html = await getData(qs.stringify(req.body));
  const hash = crypto
    .createHash("sha256")
    .update(html.data + req.body.index)
    .digest("base64");
  tracker.push(hash);
  detect(tracker, hash, html.data, req.body.index, data => {
    if (data.code) tracker.splice(tracker.indexOf(hash), 1);
    res.json(data);
  });
});

app.post("/api/stopTracking", async (req, res) => {
  const html = await getData(qs.stringify(req.body));
  const hash = crypto
    .createHash("sha256")
    .update(html.data + req.body.index)
    .digest("base64");
  if (tracker.includes(hash)) tracker.splice(tracker.indexOf(hash), 1);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
