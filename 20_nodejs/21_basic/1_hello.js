// 웹 어플리케이션=프론트엔드(화면)+ 백 엔드(서버), 풀스택
//HTML, CSS, Javascript: 브라우저 내에서 동작
//Node.js 특징
//1. 크롬 v8 엔진 -> 브라우저 밖에서 동작
//2. 이벤트 기반의 비동기 I/O방식
//3. 모듈 시스템 기발 -> 파일 단위로 모듈 관리(CommonJS 표준 스펙)

//1. REPL
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
//요정(request), 응답(response)
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(1=="1");
    console.log(1==="1");
    if(req.url==='/'){
        res.statusCode = 200; // 정상응답
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World'); //끝
    }
    else if(req.url==='/html') {
        res.writeHead(200, {'Content-Type': 'text/html' });
        res.write("<!DOCTYPE html>");
        res.write("<html>");
        res.write("<body><h1>Hello, World</h1></body>");
        res.write("</html>");
        res.end();
    }
    else if(req.url==='/json'){
        //127.0.0.1:3000/json
        const data={msg:'Hello, World'}
        res.statusCode = 200; // 정상응답
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data)); //끝
    }
    else {
        //그 외 url 404 not found
        //Not found 출력
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 Not Found");
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});