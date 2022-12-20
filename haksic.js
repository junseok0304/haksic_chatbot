const scriptName = "학식 2.0";

//학식 1.0 = 학메추 기능
//학식 1.2 = 학식먹는지 조사 기능
//학식 1.4 출튀추 추가
//학식 1.6 밥풀메뉴 추가
//학식 2.0 구로구 날씨 추가
//학식 2.4 LMS공지사항 추가, 학식먹는지 조사기능 

var allsee="\u200b".repeat(500); 
const blank = "\u200b".repeat(500); 
Jsoup = org.jsoup.Jsoup;
var noticeURL = "http://api3.skhuweather.kro.kr/schoolNotice";

var menu = [
"생면국수(4,000)","새콤달콤비빔면(5,000)",
"국수나무우동(4,500)","새우튀김우동(5,500)",
"냉국수(4,500)","리얼치즈돈까스(6,000)",
"왕돈까스(6,000)","소고기덮밥(5,500)",
"돈까스카레덮밥(6,000)","소고기낙지덮밥(6,000)",
"새우튀김2개(2,000)","로제돈까스(7,500)","청양마요돈까스(7,200)",
"매콤돈까스(7,200)","매운돈까스(7,200)",
"고고제육덮밥(6,000)","소고기쌀국수(3,500)",
"우더미쌀국수(5,500)","얼큰쌀국수(4,500)",
"파인애플볶음밥(5,000)","해물볶음밥(5,500)",
"갈비덮밥(6,000)","순대국(5,500)","얼큰순대국(6,000)",
"한돈김치찌개(6,000)","공기밥추가(1,000)","맷돌 손 두부",
"치즈순두부","토마토 도시락","초계국수",
"GS25 도시락","이천성모메존손칼국수","학교 앞 153닭불덮밥집",
"GS25에서 공수해온 컵라면",
"배달음식-엽떡","배달음식-피자","그냥 굶으세요",
"배달음식-치킨","배달음식-돈까스",
"밥full 하우스","이삭토스트",
"편의점 도시락","불곱창덮밥(7500)"
];

var dmenu = [
"떡볶이","햄버거","치킨","피자","제육덮밥",
"김밥","새우김밥","참치김밥","소고기김밥","모듬김밥","돈까스김밥","오징어덮밥","야채비빔밥","떡국","만두국","떡만두","들깨칼국수",
"바지락칼국수","치킨까스","고구마돈까스","라볶이","치즈떡볶이","스파게티","까르보나라","쫄볶이","곤드레밥","두부밥","볶음밥",
"비빔밥","돌솥비빔밥","김치볶음밥","카레덮밥","돈까스덮밥","소고기덮밥","연어덮밥","영양밥","약밥","치킨마요밥","참치마요밥",
"불닭마요밥","곤드레비빔밥","고추장제육덮밥","날치알밥","짜장덮밥","볶음김치덮밥","버터장조림비빔밥","샐러드",
"전복죽","호박죽","고기국수","김치말이국수","냉모밀","칼국수"
]

var student = [
"엥두리안 그러지마세요",
"출석ㄱㄱ",
"출석...할래요?",
"도망쳐!!!",
"야 째껴째껴",
"거... 수업이나 들으십쇼",
"도망 치지말고 수업듣기",
"헐... 튀...지말고 수업듣기",
"얌전히 수업듣기",
"어허! 어딜 가려하느냐!",
"각이다 ㄹㅇㅋㅋ",
"수업이나 들으세요",
"교수님과 강의실 데이트",
"수업들으세요",
"수 업",
"수 업 들 으 세 요",
"인생 뭐있냐 수업이나 듣자",
"회대에서 살아남는 방법: 수업 열심히 듣기",
"꾸짖을 갈!!!!!!",
"떼잉;,, 요즘 학생들은 말이야.. 열정이 읎어",
"수업을 체험하시오",
"수업티비",
"어딜가려고 하시나 출튀하면 일름 ㅅㄱ",
"하루쯤은... 괜찮지않을까요?",
"수업듣는게 좋을 것 같아요!",
"그냥 수업 들으시는게..."
]

memo = [];

main = "https://www.skhu.ac.kr";
sugang = "https://sugang.skhu.ac.kr";
honeytip = "https://frill-purple-49a.notion.site/2022-2ae4e2f795414752aebbb76ecf3e02fa";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {

if (msg=="!학메추") {
replier.reply(sender + "님 오늘 식사는\n"+menu[Math.floor(Math.random() * menu.length)]+"어떠세요?");
}

if (msg=="!저메추") {
replier.reply(sender + "님 저녁메뉴로 \n"+dmenu[Math.floor(Math.random() * dmenu.length)]+"어떠세요?");
}

if (msg=="!점메추") {
replier.reply(sender + "님 점심메뉴로 \n"+dmenu[Math.floor(Math.random() * dmenu.length)]+"어떠세요?");
}

if (msg=="!출튀추") {
replier.reply(sender + "님 오늘은 \n"+ student[Math.floor(Math.random() * student.length)]+"");
}

if (msg=="!학메추 전체") {
replier.reply("《《학식메뉴 목록이에요!》》\n"+menu);
}

if(msg=="!회대꿀팁"){
  replier.reply("<회대 학교생활의 꿀팁!>\n"+honeytip);
}

if(msg=="!수신"){
  replier.reply("<회대 수강신청페이지>\n"+sugang);
}

if(msg=="!회대메인"){
  replier.reply("<회대 메인사이트>\n"+main);
}


if(msg=="!LMS공지") { 
  let Jparse = noticeURL
  let Jparsing = Jsoup.connect(Jparse).ignoreContentType(true).get().text()
  let res = JSON.parse(Jparsing)
  let data2 = JSON.stringify(res,null,2)
  replier.reply("LMS공지사항입니다.\n"+blank+data2);
}

if(msg.indexOf("/전체보기 ")==0) { 
  let allsee0 = msg.substr(3);
  let allsee1 = "전체보기를 눌러 확인해주세요.\n"+allsee+allsee0
   replier.reply(allsee1);
}

if(msg=="!날씨"){
  
var data = "서울시 구로구";
var weather = org.jsoup.Jsoup.connect("https://google.com/search?q="+data+"+날씨").get();
var 위치 = weather.select("#wob_loc").text();
var 시간 = weather.select("#wob_dts").text();
var 상태 = weather.select("#wob_dcp").text();
var 온도 = weather.select("#wob_tm").text();
var 습도 = weather.select("#wob_pp").text();
var 풍속 = weather.select("#wob_ws").text();
let 날씨 = ("["+위치+" 날씨]\n"+시간+"\n"+온도+"℃ "+상태+"\n습도: "+습도+"  ,풍속: "+풍속);
    replier.reply(날씨);} 

}
