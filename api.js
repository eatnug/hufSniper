const axios = require('axios')
const qs = require('qs')
const cheerio = require('cheerio');

const data = qs.stringify({
    tab_lang: "K",
    ag_ledg_year: "2019",
    ag_ledg_sessn: "3",
    ag_org_sect: "A",
    campus_sect: "H!",
    ag_crs_strct_cd: "A1CE1_H1",
    cn:"A01731103",
})

axios.post('https://wis.hufs.ac.kr/src08/jsp/lecture/LECTURE2020L.jsp', data, {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'})
    .then((res) => {
        const CN = qs.parse(data).cn
        const $ = cheerio.load(res.data);
        $("#premier1 > div > table > tbody > tr > td").each((i, e) => {
            if(e.firstChild && e.firstChild.data==CN) console.log(e.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.firstChild.data)
        })
    })
    .catch((error) => {
        console.error(error)
    })


/**
     * <tr>
                    <td>1</td>
                    
                        <td>인문학공통</td>
                    
                    <td>1</td>
                    <td>J11019101</td>
                    <td class="align_left">
                        
                            <!-- onClick="javascript:go_syllabus('2019','3','A','J11019101')" -->
                            <div 
                                    onClick="javascript:lecture_open('2019','3','A','J11019101')"
                                 >
                                <font class="txt_navy">러시아.투르크.몽골의 사상과 문화<br>
                                <font class='txt_gray8'>(Russian, Turkic, Mongolian Thoughts and Cultures)
                            </div>
                        
					</td>
					
					<!-- syllabus -->
                    <td>
                            
                                <a href="javascript:lecture_open('2019','3','A','J11019101')">
                                <img src="/src08/images/common/ico_file.gif" border="0"></a>
                            
                        
                        </td>
                        
                        
                    
                    <!-- prev syllabus -->
                    <!-- 
                    
 					-->
                        
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><img src='/src08/images/common/ico_check5.gif'></td>
                    <td>이평래
                        
                            <br>(Lee  pyungrae)
                        </td>
                    <td>2</td>
                    <td>2</td>
                    <td>월 7 8 (1404)<br>(Mon 7 8 (1404))</td>
                    <td>16&nbsp;/&nbsp;50</td>
                    <td class="align_left">러시아.중앙아시아지역<br>
                        
                            <font class="txt_navy">
                        </td>
                </tr>
     */