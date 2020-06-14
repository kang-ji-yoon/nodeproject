// module2.js
/*module.exports = {
    mul: function (a, b) {
        return a * b;
    },

    div: function (a, b) {
        return a / b;
    }
};*/
const myCalc={
    mul:(a,b)=> {
        return a*b;
    },
    div:(a,b)=>{
        return a/b;
    },
};

module.exports=myCalc;