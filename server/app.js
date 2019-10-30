const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const qs = require("qs");
const PORT = process.env.PORT || 4000;

const { parseClass, getData, scanEmpty } = require("./api");

app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cors());
app.get("/test", (req, res) => {
  res.send("test suck");
});

app.get("/", (req, res) => {
  res.send(`
  It's hufNiper's API server by eaTnuGkraP. Let's snipe!`);
});

app.post("/getList", async (req, res) => {
  const html = await getData(qs.stringify(req.body));
  res.send(parseClass(html.data))
});

app.post("/getLeftSeat", async (req, res) => {
  scanEmpty(qs.stringify(req.body), req.body["cn"], () => {
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});