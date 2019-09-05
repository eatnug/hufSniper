const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const qs = require('qs')
const cheerio = require('cheerio')

const {
  getData,
  parseGetLeftSeat,
  scanEmpty
} = require('./api')

const defaultForm = {
  tab_lang: "K",
  ag_ledg_year: "2019",
  ag_ledg_sessn: "3",
  ag_org_sect: "A",
  campus_sect: "H!",
}

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({
  extended: false
}))


app.post('/', async (req, res) => {
  defaultForm["ag_crs_strct_cd"] = req.body["cat"]
  defaultForm["cn"] = req.body["cn"]
  const data = qs.stringify(defaultForm)
  const target = await getData(data)
})
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


// app.get('/', (req, res) => {
//   res.send(`
//   <form action="/" method="post">
//       전공/교양 : <select name="majMin" id="majmin" >
//                   <option value="maj">전공</option>
//                   <option value="min">교양</option>
//               </select><br/>
//       카테고리 : <select name="cat" id="majCat" >
//       <option value="AAR01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;CORE글로벌지역학&nbsp;(CORE Global Studies)&nbsp;
//                                       </option>

//                                       <option value="A1CE1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;EICC학과&nbsp;(Department of English for International
//                                           Conferences and Communication)&nbsp;
//                                       </option>

//                                       <option value="A1CG1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;ELLT학과&nbsp;(Department of English Linguistics &amp;
//                                           Language Technology)&nbsp;
//                                       </option>

//                                       <option value="AAQ01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;EU전공&nbsp;(EU Major)&nbsp;
//                                       </option>

//                                       <option value="AAMB1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;FATI전공&nbsp;(FATI)&nbsp;
//                                       </option>

//                                       <option value="A5A_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;KFL학부&nbsp;(Division of Korean as a Foreign
//                                           Language)&nbsp;
//                                       </option>

//                                       <option value="AKAA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;Language &amp; Diplomacy전공&nbsp;(Language &amp;
//                                           Diplomacy)&nbsp;
//                                       </option>

//                                       <option value="AKA_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;Language &amp; Diplomacy학부&nbsp;(Division of Language
//                                           &amp; Diplomacy)&nbsp;
//                                       </option>

//                                       <option value="A2AA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;Language &amp; Trade전공&nbsp;(Language &amp;
//                                           Trade)&nbsp;
//                                       </option>

//                                       <option value="A2A_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;Language &amp; Trade학부&nbsp;(Division of Language
//                                           &amp; Trade)&nbsp;
//                                       </option>

//                                       <option value="ALA_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;경영학부&nbsp;(Business Administration Division)&nbsp;
//                                       </option>

//                                       <option value="ALAA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;경영학전공&nbsp;(Business Administration)&nbsp;
//                                       </option>

//                                       <option value="AEC_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;경제학부&nbsp;(Division of Economics)&nbsp;
//                                       </option>

//                                       <option value="AECA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;경제학전공&nbsp;(Economics)&nbsp;
//                                       </option>

//                                       <option value="ACDD1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;광고·PR·브랜딩전공&nbsp;(Advertising·Public
//                                           Relations·Branding)&nbsp;
//                                       </option>

//                                       <option value="AFF01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;교육학&nbsp;(Education)&nbsp;
//                                       </option>

//                                       <option value="ACAI1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;국가리더전공&nbsp;(National Leader)&nbsp;
//                                       </option>

//                                       <option value="AEAA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;국제통상학과&nbsp;(Department of International Economics
//                                           and Law)&nbsp;
//                                       </option>

//                                       <option value="AGA_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;국제학부&nbsp;(Division of International Studies)&nbsp;
//                                       </option>

//                                       <option value="AGAA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;국제학전공&nbsp;(International Studies)&nbsp;
//                                       </option>

//                                       <option value="AAH01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;네덜란드어과&nbsp;(Department of Dutch)&nbsp;
//                                       </option>

//                                       <option value="AAD01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;노어과&nbsp;(Department of Russian)&nbsp;
//                                       </option>

//                                       <option value="AAC01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;독일어과&nbsp;(Department of German)&nbsp;
//                                       </option>

//                                       <option value="AFC01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;독일어교육과&nbsp;(Department of German Education)&nbsp;
//                                       </option>

//                                       <option value="ABP02_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;동북아외교통상전공&nbsp;(North-East Asian Foreign Affairs and
//                                           Commerce)&nbsp;
//                                       </option>

//                                       <option value="ANJA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;디지털인문한국학전공&nbsp;(Digital Korean Studies in
//                                           Humanities)&nbsp;
//                                       </option>

//                                       <option value="ABC01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;말레이.인도네시아어과&nbsp;(Department of
//                                           Malay-Indonesian)&nbsp;
//                                       </option>

//                                       <option value="ABJ01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;몽골어과&nbsp;(Department of Mongolian)&nbsp;
//                                       </option>

//                                       <option value="ANDD2_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;문화콘텐츠학전공&nbsp;(Cultural Contents Major)&nbsp;
//                                       </option>

//                                       <option value="ACD_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;미디어커뮤니케이션학부&nbsp;(Division of Media &amp;
//                                           Communication)&nbsp;
//                                       </option>

//                                       <option value="ACDE1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;방송·영상·뉴미디어전공&nbsp;(Broadcasting·Film·New Media)&nbsp;
//                                       </option>

//                                       <option value="ABF01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;베트남어과&nbsp;(Department of Vietnamese)&nbsp;
//                                       </option>

//                                       <option value="AAP01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;브릭스전공&nbsp;(BRICs Major)&nbsp;
//                                       </option>

//                                       <option value="ANDB2_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;사학과&nbsp;(Department of History)&nbsp;
//                                       </option>

//                                       <option value="AANA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;세계문화예술경영전공&nbsp;(Art and Cultural Mediation)&nbsp;
//                                       </option>

//                                       <option value="AAI01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;스칸디나비아어과&nbsp;(Department of Scandinavian
//                                           Languages)&nbsp;
//                                       </option>

//                                       <option value="AAE01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;스페인어과&nbsp;(Department of Spanish)&nbsp;
//                                       </option>

//                                       <option value="ABD01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;아랍어과&nbsp;(Department of Arabic)&nbsp;
//                                       </option>

//                                       <option value="ACDA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;언론·정보전공&nbsp;(Journalism &amp; Information)&nbsp;
//                                       </option>

//                                       <option value="A1CF1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;언어와공학전공&nbsp;(Language and Technology)&nbsp;
//                                       </option>

//                                       <option value="ANDC2_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;언어인지과학과&nbsp;(Department of Linguistics and Cognitive
//                                           Science)&nbsp;
//                                       </option>

//                                       <option value="A1CD1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;영미문학·문화학과&nbsp;(Department of English Literature and
//                                           Culture)&nbsp;
//                                       </option>

//                                       <option value="AFA01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;영어교육과&nbsp;(Department of English Education)&nbsp;
//                                       </option>

//                                       <option value="A1CA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;영어학과&nbsp;(Department of English Linguistics)&nbsp;
//                                       </option>

//                                       <option value="A5A01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;외국어로서의한국어교육전공&nbsp;(Korean Education as a Foreign
//                                           Language)&nbsp;
//                                       </option>

//                                       <option value="A5A02_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;외국어로서의한국어통번역전공&nbsp;(Korean Interpretation &amp;
//                                           Translation as a Foreign Language)&nbsp;
//                                       </option>

//                                       <option value="ATMB2_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;융복합소프트웨어전공&nbsp;(Software Convergence Major)&nbsp;
//                                       </option>

//                                       <option value="AJDA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;융합일본지역전공&nbsp;(Integrated Japanese Studies)&nbsp;
//                                       </option>

//                                       <option value="AJD_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;융합일본지역학부&nbsp;(Division of Integrated Japanese
//                                           Studies)&nbsp;
//                                       </option>

//                                       <option value="ABI01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;이란어과&nbsp;(Department of Persian)&nbsp;
//                                       </option>

//                                       <option value="AAF01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;이탈리아어과&nbsp;(Department of Italian)&nbsp;
//                                       </option>

//                                       <option value="ABG01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;인도어과&nbsp;(Department of Hindi)&nbsp;
//                                       </option>

//                                       <option value="AJCA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;일본언어문화전공&nbsp;(Japanese Language, Literature and
//                                           Culture)&nbsp;
//                                       </option>

//                                       <option value="AJC_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;일본언어문화학부&nbsp;(Division of Japanese Language,
//                                           Literature and Culture)&nbsp;
//                                       </option>

//                                       <option value="ACBA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;정치외교학과&nbsp;(Department of Political Science and
//                                           Diplomacy)&nbsp;
//                                       </option>

//                                       <option value="AFI01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;중국어교육과&nbsp;(Department of Chinese Education)&nbsp;
//                                       </option>

//                                       <option value="AICA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;중국언어문화전공&nbsp;(Chinese Language, Literature and
//                                           Culture)&nbsp;
//                                       </option>

//                                       <option value="AIC_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;중국언어문화학부&nbsp;(Division of Chinese Language,
//                                           Literature and Culture)&nbsp;
//                                       </option>

//                                       <option value="AIDA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;중국외교통상전공&nbsp;(Chinese Foreign Affairs and
//                                           Commerce)&nbsp;
//                                       </option>

//                                       <option value="AID_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;중국외교통상학부&nbsp;(Division of Chinese Foreign Affairs
//                                           and Commerce)&nbsp;
//                                       </option>

//                                       <option value="ANDA2_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;철학과&nbsp;(Department of Philosophy)&nbsp;
//                                       </option>

//                                       <option value="ABE01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;태국어과&nbsp;(Department of Thai)&nbsp;
//                                       </option>

//                                       <option value="ABH11_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;터키.아제르바이잔어과&nbsp;(Department of Turkish and
//                                           Azerbaijani)&nbsp;
//                                       </option>

//                                       <option value="AAK01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;포르투갈어과&nbsp;(Department of Portuguese)&nbsp;
//                                       </option>

//                                       <option value="AAMC1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;프랑스.EU전공&nbsp;(French and European Studies)&nbsp;
//                                       </option>

//                                       <option value="AFB01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;프랑스어교육과&nbsp;(Department of French Education)&nbsp;
//                                       </option>

//                                       <option value="AAM_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;프랑스어학부&nbsp;(Division of French Language)&nbsp;
//                                       </option>

//                                       <option value="AAMA1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;프랑스응용어문학전공&nbsp;(Applied French Linguistics and
//                                           Literature)&nbsp;
//                                       </option>

//                                       <option value="AFD01_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;한국어교육과&nbsp;(Department of Korean Education)&nbsp;
//                                       </option>

//                                       <option value="ACBB1_H1">
//                                           &nbsp;(서울)&nbsp;-&nbsp;행정학과&nbsp;(Department of Public Administration)&nbsp;
//                                       </option>
//       </select><br/>
//       학수번호 : <input type="text" name="cn"><br/>
//       <input type="submit">
//   </form>`);
// });


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});