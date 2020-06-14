// 1. 변수
var a=1;
var b=2;
c=3;
console.log(a);
console.log(b);
console.log(c);
console.log(a,b,c);

var s1="Hello";
var s2='World';
console.log(s1,s2);
console.log("%s %s",s1,s2);

console.log(typeof a); //number
console.log(typeof s1); //String
console.log(typeof true); //String
console.log(typeof {}); //String

//변수 호이스팅
function foo(){
    console.log(d);
    var d = 10;
    console.log(d);
}

foo();

let e = 10;

function foo2(){
    if(true){
        var tmp = 0;
        console.log("1:", tmp);
    }
    console.log("2:",tmp);
}

foo2();

const v = 10;