var nums = [1, 2, 3, 4, 5];
console.log(1 in nums);
// for each(var item in items){}
nums.forEach(function (element) {
    console.log(element);
});
console.log("using for--in");
for (var x in nums) {
    console.log(nums[x]);
}
console.log("using for--of");
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var x = nums_1[_i];
    console.log(x);
}
//tuple usage
var aTup = [1, 'hello', [2, 3, 4, 5], { key: 'value' }];
aTup.forEach(function (item) {
    if (typeof (item) == 'number') {
        console.log(item + " it is number");
    }
    else if (typeof (item) == 'object') {
        try {
            var temp = (item);
            console.log(temp);
        }
        catch (error) {
            console.log("it is not an array");
        }
    }
});
//unions
function unionFunction(pParameter) {
    console.log(pParameter);
}
unionFunction("sai");
unionFunction(["sai", "ammu"]);
//var vs let
var a = 10;
var b = 20;
if (a == 10) {
    var c = 30;
}
console.log(c);
if (b == 10) {
    var d = 30;
}
console.log(d);
