const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const qs = require('qs')
const PORT = process.env.PORT

const {
  getData,
  scanEmpty
} = require('./api')

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({
  extended: false
}))


app.get('/', (req,res) => {
  res.render('index.ejs')
})
app.post('/getList', async (req,res) => {
  const html = await getData(qs.stringify(req.body))
  const target = html.data.split(`Room</button></p>`)[1]
  res.send(target)
})
app.post('/getLeftSeat', async (req,res) => {
  scanEmpty(qs.stringify(req.body), req.body["cn"], () => {res.json({success: true})})
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});