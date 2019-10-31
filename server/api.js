const axios = require("axios");
const qs = require("qs");
const cheerio = require("cheerio");
/**
 *  axios post로 데이터 받아오는 함수
 * @param {*} url https://wis.hufs.ac.kr/src08/jsp/lecture/LECTURE2020L.jsp
 * @param {*} data 포스트로 넘길 폼 데이터 qs stringify
 * @returns axios return
 */
async function getData(data) {
  return await axios.post("https://wis.hufs.ac.kr/src08/jsp/lecture/LECTURE2020L.jsp", data, { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" });
}

/**
 * 자리 남았는지 알려주는 함수
 * @param {*} res http response
 * @param {*} CN course number
 */
const parseGetLeftSeat = (res, index) => {
  const $ = cheerio.load(res.data);
  const apply = $(selector(index, 16))
    .text()
    .split("/");
  return Number(apply[1].trim()) - Number(apply[0].trim()) < 1 ;
};

const scanEmpty = async (data, CN, cb) => {
  if (await parseGetLeftSeat(await getData(data), CN)) cb();
  else await scanEmpty(data, CN, cb);
};

/**
 * 강의 시간표 html 페이지에서 수업 목록 파싱하는 함수
 * @param {*} html 파싱 할 html
 * @returns [{title,grade,courseNumber,professor,timePlace,apply},] 형태의 강의 목록 객체 배열
 */
const parseClass = html => {
  const $ = cheerio.load(html);
  const count = $("#premier1 tbody tr").length;
  const objs = [];
  for (i = 2; i <= count; i++) {
    objs.push({
      title: $(`${selector(i, 5)} > div > font`).text(),
      grade: $(selector(i, 3)).text(),
      courseNumber: $(selector(i, 4)).text(),
      professor: $(selector(i, 12)).text(),
      timePlace: $(selector(i, 15)).text(),
      apply: $(selector(i, 16)).text(),
      index: i
    });
  }
  return objs;
};

const selector = (a, b) => `#premier1 > div > table > tbody > tr:nth-child(${a}) > td:nth-child(${b})`;

module.exports = { getData, parseGetLeftSeat, scanEmpty, parseClass };
