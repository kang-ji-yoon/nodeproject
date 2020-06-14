// 2. 전역 객체
// - console : 콘솔 기능
// - process : 프로그램 관련
// - exports : 모듈 관련'
console.timeStamp("test");
//수행
console.timeEnd("test");

console.log(process.version);
console.log(process.arch);
console.log(process.memoryUsage());

process.exit();
console.log('찍힐까?');