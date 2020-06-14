const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require("morgan");
const port = 3000;

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
    );

// form에 전달되는 바디메시지 처리하는 바디파서 모듈 설정
// true: qa(확장모듈), false: querystring(기본모듈)
app.use(bodyParser.urlencoded({ extended: false }));

// 바디 메시지가 JSON 형식인 경우에 바디파서 설정
app.use(bodyParser.json());

// 정적 파일 위치 설정
// 127.0.0.1:3000/music.html
//app.use(express.static("public"));
///127.0.0.1:3000/static/music.html
//app.use("/static",express.static("public"))


//로깅처리 미들웨어 설정
app.use(logger("common")); // dev < short < common < combined

// http method : get, post, put, delete,...
app.get('/', (req, res) => res.send('Hello World!'));

// /music, 127.0.0.1:3000/music?singer=조유리&title=언우밤지
// "조유리의 언우밤지입니다."
app.get("/music", (req, res) => {
    //ES6,객체 구조 분해 할당 (비구조화 할당)
    const {singer,title}=req.query;
    res.send(`query string(get) -> ${singer}의 ${title}입니다.`);
});

// url 파라미터 (REST API)
// 127.0.0.1:3000/music/김민주/ReallyLikeYou
app.get("/music/:singer/:title", (req, res) => {
    const {singer, title} =req.params; // {singer:xx, title:xx}
    res.send(`url parameter(get) -> ${singer}의 ${title}입니다.`);
});

// POST방식
// HTTP Message = Header부 + Body부
// GET: Header부에 데이터를 담음, 길이 제한이 있음, 캐싱이 됨
// POST: Body부에 데이터를 담음, 길이 제한이 없음, 캐싱이 안됨
// company.com/apply?id=10002 -> 해킹사고
app.post("/music",(req, res) => {
    const {singer, title} = req.body;
    res.send(`urlencoded(post) -> ${singer}의 ${title}입니다.`)
});

// URL 파라메터 방식 (REST API)
app.post("/music/:singer/:title", (req, res) => {
    const { singer, title } = req.params;
    res.send(`url parameter(post) -> ${singer}의 ${title}입니다.`);
});

// PUT : http://localhost:3000/music/:id
// { singer: 아이유, title : 좋은날}
// 결과 : {id} -> 아이유의 좋은날로 수정됨
app.put("/music/:id",(req, res) => {
    const id = req.params.id;
    const { singer, title} = req.body;
    res.send(`${id} -> ${singer}의 ${title}로 수정됨`);
});

// 여기까지 내려왔으면 위에서 처리가 되지 않은 것
// 404 에러 처리
app.use((req, res, next) => {
    const error = new Error("없는 페이지입니다.");
    error.code = 404;
    next(error);
});

// 오류처리 미들웨어 함수
app.use((err, req, res, next) => {
    //if (err.code) res.status(err.code);
    //else res.status(500); //500: Internal Server Error
    res.status(err.code||500);
    //if (err.message) res.send(err.message);
    //else res.send("Internal Server Error";);
    res.send(err.message||"Internal Server Error");
});

// HTTP Method
// - GET : 조회
// - POST : 생성
// - PUT : 갱신
// - DELETE : 삭제

// REST API
// HTTP 요청 시 경로에 자원을 요청 -> 명사 지정
// 예) GET /users, GET /users/{id}
// test.com/users/{id} [GET] : 조회(목록, 상세)
// test.com/users [POST] : 등록
// test.com/users/{id} [PUT] : 갱신
// test.com/users/{id} [DELETE] : 삭제

// (bad case)
// test.com/users/create
// test.com/users/search
// test.com/users/update
// test.com/users/delete