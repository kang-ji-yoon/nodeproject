//2. 배열
var arr = [1,2,3,4,5];
console.log(arr.length);
console.log(arr[2]);

let arr2 = [1,2, "apple", "banana"];
//apple 출력
console.log(arr2[2]);

//반복문
for(i=0; i<arr2.length; i++){
    console.log(i,arr2[i]);
}

//for-in
for(i in arr2){
    console.log(i);
}

//for-of(ES6)
for (i of arr2) {
    console.log(i);
}

//splice
//index, howmany(삭제), elements(추가)
let a = ["a","b","c"];
a.splice(1,0,"d");
console.log(a);

// adbc>adxyc
a.splice(2,1,"x","y");
console.log(a);

const b = [1,2,3,4,5];
console.log(b.slice(0, 3));

const result = b.find((item) => item >= 3); //3(o), 4, 5
console.log(result);

b.filter