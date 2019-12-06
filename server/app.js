const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const qs = require("qs");
const PORT = process.env.PORT || 4000;
const crypto = require("crypto");
const { parseClass, getData, parseGetLeftSeat, detect } = require("./api");
const tracker = [];
const isIn = (hash) => {
  return tracker.includes(hash)
}

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
  detect(isIn, hash, html.data, req.body.index, data => {
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
  if (isIn(hash)) {
    tracker.splice(tracker.indexOf(hash), 1);
    res.json({code:"success stop tracking"})
  }
  res.json({code:"not in list"})
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
