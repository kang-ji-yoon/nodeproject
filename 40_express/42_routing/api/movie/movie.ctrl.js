// 데이터
let nextId = 4;
let movie = [
    { id: 1, title: "스타워즈", director: "조지 루카스", year: "1977"},
    { id: 2, title: "아바타", director: "제임스 카메론", year: "2009"},
    { id: 3, title: "엔드게임", director: "루소 형제", year: "2019"}
];

// 목록조회 (localhost:3000/movie?limit=3)
// - 성공 : limit수만큼 movie 객체를 담은 배열을 리턴 (100:OK)
// - 실패 : limit가 숫자형이 아닌 경우 오류(400:Bad Request)
const list = (req, res) => {
    const limit = parseInt(req.query.limit||10,10);
    if(Number.isNaN(limit)){
        return res.status(400).end();
    }
    //limit수만큼 movie객체를 담은 배열 리턴
    res.json(movie.slice(0,limit));
};

// 상세조회 (movie/:id)
// 성공 : id에 해당하는 movie 객체를 리턴(200:OK)
// 실패 : id가 숫자가 아닐 경우 (400: Bad Request)
//        해당하는 id가 없는 경우 (404 : Not Found)
const detail = (req, res) => {
    const id = parseInt(req.params.id,10);
    if (Number.isNaN(id)) return res.status(400).end();

    //const result = movie.find((m) => m.id === id);
    const result = movie.filter((m) => m.id === id)[0];

    if(!result) return res.status(404).end();
    res.json(result);
};

// 등록(localhost:3000/api/movie)
// 성공 : id 채번, 등록한 movie 객체를 리턴 (201: Created)
// 실패 : title, director, year 값 누락 시 400 반환 (400: Bad Request)
const create = (req, res) => {
    const { title, director, year } = req.body;
    if (!title || !director || !year) return res.status(400).end();
    const m = { id: nextId++, title, director, year };
    movie.push(m);
    res.status(201).json(m);
};

// 수정 (/movie/:id)
// 성공 : id에 해당하는 movie 객체에 입력 데이터로 변경
//        해당 객체를 반환 (200:OK)
// 실패 : id가 숫자가 아닐 경우 (400: Bad Request)
//        해당하는 id가 없는 경우 (404: Not Found)
const update = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();

    const result = movie.find(m => m.id === id);
    if(!result) return res.status(404).end();
    //성공시
    const { title, director, year } = req.body;

    if(title) result.title = title;
    if(director) result.director = director;
    if(year) result.year = year;
    res.json(result);
};

// 삭제 (localhost:3000/api/movie/:id)
// 성공 : id에 해당하는 객체를 배열에서 삭제 후 결과 배열 리턴(200: OK)
// 실패 : id가 숫자가 아닌 경우(400: Bad Request)
//        해당하는 id가 없는 경우 (404: Not Found)
const remove = (req, res) => {
    const id = parseInt(req.params.id);
    if(Number.isNaN(id)) return res.status(400).end();

    const result = movie.find(m => m.id === id);
    if (!result) return res.status(404).end();

    movie = movie.filter(m => m.id !==id);
    res.json(movie);
};

module.exports = { list, detail, create, update, remove };