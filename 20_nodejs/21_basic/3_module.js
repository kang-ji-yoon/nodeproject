// module.js
/*exports.add = function (a, b) {
    return a + b;
}

exports.sub = function (a, b) {
    return a - b;
}*/

const myCalc = {
    add(a,b){
        return a+b;
    }
    ,
    sub(a,b){
        return a-b;
    }
};

exports.calc=myCalc;