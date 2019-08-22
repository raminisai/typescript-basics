function calss1() {
    this.propertyName = "A is a property";
}
var obj = new calss1();
console.log(obj.propertyName);
/************** */
var num = 400.7;
var nm = "joe";
var flag = false;
var nill = null;
var notDefined;
//by default any
var anyUsage;
console.log(num, nm, flag, nill, notDefined);
function fun() {
    return "Trying to have to fun....";
}
var fundoo = function () {
    return "haha lol....\uD83D\uDE00 \uD83D\uDE00";
};
console.log(fun());
console.log(fundoo());
//function usage
function UsingParam(pRequried, pDefault, pOptinal) {
    if (pDefault === void 0) { pDefault = "DBS_ID"; }
    var pRest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        pRest[_i - 3] = arguments[_i];
    }
    console.log(pRequried, pDefault, pOptinal, pRest);
}
UsingParam(false, "DBS-2345678");
function arrayParams(pArr) {
    console.log(pArr);
}
function restParams() {
    var pRest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        pRest[_i] = arguments[_i];
    }
    console.log(pRest + "\uD83D\uDE00");
}
arrayParams(['1', '2']);
restParams('1', '2', '3');
function complicated() {
    console.log("inside complicated!");
    return function () {
        console.log("i will display if invoked only");
        return function (nam) {
            console.log("inside complicated subfunction" + nam);
        };
    };
}
var result = complicated();
result();
complicated()(); //currying of function
console.log(complicated());
complicated()()("ammu");
