// 6.ES6
//let, const 추가
let a = 10;
let b = [1,2,3];
let c = {};

const d = 10;

//템플릿 문자열
let n1 = "훈", n2 = "채";
// My name is 훈 채.
let name = "My name is "+ n1+n2+".";
console.log(name);

let name2 = `My name is ${n1}${n2}.`;
console.log(name2);

// 화살표 함수 (arrow function)
function hello(){
    console.log("hello");
}
//익명함수
var hello = function(){
    console.log("hello");
}
hello();
//화살표 함수
(() => console.log("hello"))();


//매개변수 1개 함수
function print(a){
    console.log(a);
}
print("펭수");

// 익명함수
let f = function(a){
    console.log(a);
}
f("펭수");

//함수정의 + 호출
(function(a){
    console.log(a);
})("펭수");

//화살표 함수
((a)=>console.log(a))("펭수");

//매개변수 2개 함수
function add(a,b){
    return a+b;
}

//익명함수
let f2 = function add(a,b){
    return a+b;
}
f2(1,2);

//함수정의 + 호출
(function add(a,b){
    return a+b;
})(1,2);

//화살표 함수
console.log((a,b)=>a+b)(1,2);