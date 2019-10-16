const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const qs = require("qs");
const PORT = process.env.PORT || 4000;

const { getData, scanEmpty } = require("./api");

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
  const target = html.data.split(`<th>비고<br>(Note)</th>`)[1];
  const re_tr = /<tr([\s\S]*?)<\/tr>/g;
  const re_td = /<td[\s\S]*?>([\s\S]*?)<\/td>/g;
  const re_title = /<font class="txt_navy">([\s\S]*?)<br>/g;
  const array = [];
  while ((tmp = re_tr.exec(target))) {
    array.push(tmp[1]);
  }
  const objs = array.map(c => {
    const obj = {};
    const attr = [];
    while ((_tmp = re_td.exec(c))) {
      attr.push(_tmp);
    }
    obj.title = re_title.exec(attr[4][1])[1];
    obj.grade = attr[2][1];
    obj.courseNumber = attr[3][1];
    obj.professor = attr[11][1].split("<br>")[0].trim();
    obj.timePlace = attr[14][1].split("<br>")[0];
    obj.apply = attr[15][1].replace(/&nbsp;/gi, "");
    console.log(`${re_title.exec(attr[4][1])}`);
    return obj;
  });
  res.send(objs);
});

app.post("/getLeftSeat", async (req, res) => {
  scanEmpty(qs.stringify(req.body), req.body["cn"], () => {
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
