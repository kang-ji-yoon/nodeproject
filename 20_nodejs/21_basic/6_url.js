//기본모듈
//url:url처리모듈
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // string -> object
  // 127.0.0.1:3000/abc
  // Query String : 127.0.0.1:3000/?year=3&class=4&name=강지윤
  const obj = url.parse(req.url,true); 
  const year = obj.query.year;
  const clas = obj.query.class;
  const name = obj.query.name;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(`${year}학년 ${clas}반 ${name}입니다.`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
