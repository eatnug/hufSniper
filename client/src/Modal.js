import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import Course from "./Course";
const Modal = () => {
  const [form, setForm] = useState({ tab_lang: "K", ag_ledg_year: "2019", ag_ledg_sessn: "1", gubun: "1", ag_crs_strct_cd: "AAR01_H1", ag_compt_fld_cd: "301_H1" });
  const [courses, setCourses] = useState([]);
  return (
    <div className="modal__self">
      <div className="modal__form">
        <label className="form__label">
          년도:
          <select className="form__select" id="ag_ledg_year" value={form.ag_ledg_year} onChange={e => setForm({ ...form, ag_ledg_year: e.target.value })}>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </label>
        <br></br>
        <label className="form__label">
          학기:
          <select className="form__select" id="ag_ledg_sessn" value={form.ag_ledg_sessn} onChange={e => setForm({ ...form, ag_ledg_sessn: e.target.value })}>
            <option value="1">1st Semester</option>
            <option value="2">Summer Session</option>
            <option value="3">2nd Semester</option>
            <option value="4">Winter Session</option>
          </select>
        </label>
        <br></br>
        <label className="form__label">
          전공구분:
          <select className="form__select" id="gubun" value={form.gubun} onChange={e => setForm({ ...form, gubun: e.target.value })}>
            <option value="1"> 전공</option>
            <option value="2"> 교양</option>
          </select>
        </label>
        <br></br>
        {form.gubun === "1" ? (
          <label className="form__label">
            전공:
            <select className="form__select" id="ag_crs_strct_cd" value={form.ag_crs_strct_cd} onChange={e => setForm({ ...form, ag_crs_strct_cd: e.target.value })}>
              <option value="AAR01_H1">(서울)-CORE글로벌지역학(CORE Global Studies)</option>

              <option value="A1CE1_H1">(서울)-EICC학과(Department of English for International Conferences and Communication)</option>

              <option value="A1CG1_H1">(서울)-ELLT학과(Department of English Linguistics &amp; Language Technology)</option>

              <option value="AAQ01_H1">(서울)-EU전공(EU Major)</option>

              <option value="AAMB1_H1">(서울)-FATI전공(FATI)</option>

              <option value="A5A_H1">(서울)-KFL학부(Division of Korean as a Foreign Language)</option>

              <option value="AKAA1_H1">(서울)-Language &amp; Diplomacy전공(Language &amp; Diplomacy)</option>

              <option value="AKA_H1">(서울)-Language &amp; Diplomacy학부(Division of Language &amp; Diplomacy)</option>

              <option value="A2AA1_H1">(서울)-Language &amp; Trade전공(Language &amp; Trade)</option>

              <option value="A2A_H1">(서울)-Language &amp; Trade학부(Division of Language &amp; Trade)</option>

              <option value="ALA_H1">(서울)-경영학부(Business Administration Division)</option>

              <option value="ALAA1_H1">(서울)-경영학전공(Business Administration)</option>

              <option value="AEC_H1">(서울)-경제학부(Division of Economics)</option>

              <option value="AECA1_H1">(서울)-경제학전공(Economics)</option>

              <option value="ACDD1_H1">(서울)-광고·PR·브랜딩전공(Advertising·Public Relations·Branding)</option>

              <option value="AFF01_H1">(서울)-교육학(Education)</option>

              <option value="ACAI1_H1">(서울)-국가리더전공(National Leader)</option>

              <option value="AEAA1_H1">(서울)-국제통상학과(Department of International Economics and Law)</option>

              <option value="AGA_H1">(서울)-국제학부(Division of International Studies)</option>

              <option value="AGAA1_H1">(서울)-국제학전공(International Studies)</option>

              <option value="AAH01_H1">(서울)-네덜란드어과(Department of Dutch)</option>

              <option value="AAD01_H1">(서울)-노어과(Department of Russian)</option>

              <option value="AAC01_H1">(서울)-독일어과(Department of German)</option>

              <option value="AFC01_H1">(서울)-독일어교육과(Department of German Education)</option>

              <option value="ABP02_H1">(서울)-동북아외교통상전공(North-East Asian Foreign Affairs and Commerce)</option>

              <option value="ANJA1_H1">(서울)-디지털인문한국학전공(Digital Korean Studies in Humanities)</option>

              <option value="ABC01_H1">(서울)-말레이.인도네시아어과(Department of Malay-Indonesian)</option>

              <option value="ABJ01_H1">(서울)-몽골어과(Department of Mongolian)</option>

              <option value="ANDD2_H1">(서울)-문화콘텐츠학전공(Cultural Contents Major)</option>

              <option value="ACD_H1">(서울)-미디어커뮤니케이션학부(Division of Media &amp; Communication)</option>

              <option value="ACDE1_H1">(서울)-방송·영상·뉴미디어전공(Broadcasting·Film·New Media)</option>

              <option value="ABF01_H1">(서울)-베트남어과(Department of Vietnamese)</option>

              <option value="AAP01_H1">(서울)-브릭스전공(BRICs Major)</option>

              <option value="ANDB2_H1">(서울)-사학과(Department of History)</option>

              <option value="AANA1_H1">(서울)-세계문화예술경영전공(Art and Cultural Mediation)</option>

              <option value="AAI01_H1">(서울)-스칸디나비아어과(Department of Scandinavian Languages)</option>

              <option value="AAE01_H1">(서울)-스페인어과(Department of Spanish)</option>

              <option value="ABD01_H1">(서울)-아랍어과(Department of Arabic)</option>

              <option value="ACDA1_H1">(서울)-언론·정보전공(Journalism &amp; Information)</option>

              <option value="A1CF1_H1">(서울)-언어와공학전공(Language and Technology)</option>

              <option value="ANDC2_H1">(서울)-언어인지과학과(Department of Linguistics and Cognitive Science)</option>

              <option value="A1CD1_H1">(서울)-영미문학·문화학과(Department of English Literature and Culture)</option>

              <option value="AFA01_H1">(서울)-영어교육과(Department of English Education)</option>

              <option value="A1CA1_H1">(서울)-영어학과(Department of English Linguistics)</option>

              <option value="A5A01_H1">(서울)-외국어로서의한국어교육전공(Korean Education as a Foreign Language)</option>

              <option value="A5A02_H1">(서울)-외국어로서의한국어통번역전공(Korean Interpretation &amp; Translation as a Foreign Language)</option>

              <option value="ATMB2_H1">(서울)-융복합소프트웨어전공(Software Convergence Major)</option>

              <option value="AJDA1_H1">(서울)-융합일본지역전공(Integrated Japanese Studies)</option>

              <option value="AJD_H1">(서울)-융합일본지역학부(Division of Integrated Japanese Studies)</option>

              <option value="ABI01_H1">(서울)-이란어과(Department of Persian)</option>

              <option value="AAF01_H1">(서울)-이탈리아어과(Department of Italian)</option>

              <option value="ABG01_H1">(서울)-인도어과(Department of Hindi)</option>

              <option value="AJCA1_H1">(서울)-일본언어문화전공(Japanese Language, Literature and Culture)</option>

              <option value="AJC_H1">(서울)-일본언어문화학부(Division of Japanese Language, Literature and Culture)</option>

              <option value="ACBA1_H1">(서울)-정치외교학과(Department of Political Science and Diplomacy)</option>

              <option value="AFI01_H1">(서울)-중국어교육과(Department of Chinese Education)</option>

              <option value="AICA1_H1">(서울)-중국언어문화전공(Chinese Language, Literature and Culture)</option>

              <option value="AIC_H1">(서울)-중국언어문화학부(Division of Chinese Language, Literature and Culture)</option>

              <option value="AIDA1_H1">(서울)-중국외교통상전공(Chinese Foreign Affairs and Commerce)</option>

              <option value="AID_H1">(서울)-중국외교통상학부(Division of Chinese Foreign Affairs and Commerce)</option>

              <option value="ANDA2_H1">(서울)-철학과(Department of Philosophy)</option>

              <option value="ABE01_H1">(서울)-태국어과(Department of Thai)</option>

              <option value="ABH11_H1">(서울)-터키.아제르바이잔어과(Department of Turkish and Azerbaijani)</option>

              <option value="AAK01_H1">(서울)-포르투갈어과(Department of Portuguese)</option>

              <option value="AAMC1_H1">(서울)-프랑스.EU전공(French and European Studies)</option>

              <option value="AFB01_H1">(서울)-프랑스어교육과(Department of French Education)</option>

              <option value="AAM_H1">(서울)-프랑스어학부(Division of French Language)</option>

              <option value="AAMA1_H1">(서울)-프랑스응용어문학전공(Applied French Linguistics and Literature)</option>

              <option value="AFD01_H1">(서울)-한국어교육과(Department of Korean Education)</option>

              <option value="ACBB1_H1">(서울)-행정학과(Department of Public Administration)</option>
            </select>
          </label>
        ) : (
          <label className="form__label">
            교양 영역:
            <select className="form__select" id="ag_compt_fld_cd" value={form.ag_compt_fld_cd} onChange={e => setForm({ ...form, ag_compt_fld_cd: e.target.value })}>
              <option value="301_H1">인문강좌(서울)</option>
              <option value="302_H1">교양외국어(서울)</option>
              <option value="32Z_H1">공동교양(한예종)(서울)</option>
              <option value="330_H1">언어와문학(서울)</option>
              <option value="331_H1">문화와예술(서울)</option>
              <option value="332_H1">역사와철학(서울)</option>
              <option value="334_H1">과학과기술(서울)</option>
              <option value="335_H1">핵심인문기초(서울)</option>
              <option value="336_H1">인간과사회(서울)</option>
              <option value="340_H1">미네르바인성교육(서울)</option>
              <option value="341_H1">시민교육(서울)</option>
              <option value="351_H1">HUFS CAREER(서울)</option>
              <option value="353_H1">미래시뮬레이션(서울)</option>
              <option value="354_H1">생활과운동(서울)</option>
              <option value="355_H1">실용외국어(선택)(서울)</option>
              <option value="356_H1">외국인을 위한 한국학(서울)</option>
              <option value="357_H1">삶과지혜(서울)</option>
              <option value="61_H1">군사학(서울)</option>
            </select>
          </label>
        )}
        <br></br>
        <div className="button__container">
          <button
            className="button__self"
            onClick={async () => {
              const rslt = await axios.post("http://127.0.0.1:3000/api/getList", qs.stringify(form));
              return setCourses([...rslt.data]);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="courses__container">
        {courses.map((cur, ind) => (
          <Course key={ind} course={cur} ctx={form} where={"form"} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
