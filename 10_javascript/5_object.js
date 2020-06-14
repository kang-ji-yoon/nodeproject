// 4. 객체

// 객체 선언
let a = {};     //배열은 [], 객체는 {}, 빈객체
let b = new Object();
console.log(typeof a);

// 객체 : 속성(property), 메소드(method)
let Person = {};
Person.age = 19;  // object.속성명
Person["name"] = "훈채";    //object["속성명"]
console.log(Person);

// key: value
let Person2 = {
    age: 10,
    name: "채훈"
};

console.log(Person2.age);
console.log(Person2["name"]);

Person2.add = function () {
    console.log("저는 %d살 %s입니다.",this.age, this.name);
}

Person2.add();

let Person3 = {
    age: 10,
    name: "윤지",
    print : function () {
        console.log("저는 %d살 %s입니다.",this.age, this.name);
    }
};

Person3.print();

// 배열 Friends 2개 객체
// 객체 property : no, name
let Friends = [
    {
        no : 1,
        name : "지윤"
    },
    {
        no : 2,
        name : "보성"
    }
];
console.log(Friends[0].name);
console.log(Friends[1]["name"]);

let grades = {
    data: {
        kor: 100, mat:90, eng:95
    },
    print() {
        for(subject in this.data){
            console.log(subject+":"+this.data.subject);
        }
    }
};
grades.print();


// 수학 점수 출력
console.log(grades.data.mat);
console.log(grades.data["mat"]);
console.log(grades["data"].mat);
console.log(grades["data"]["mat"]);

let id = 3712;
let name = "신훈채";

let obj = {
    id,
    name
};
console.log("%d, %s", obj.id, obj.name);