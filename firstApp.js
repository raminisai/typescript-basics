// function calss1(){
//     this.propertyName="A is a property";
// }
// var obj = new calss1();
// console.log(obj.propertyName)
// /************** */
// let num:number = 400.7
// let nm:string = "joe"
// let flag:boolean = false
// let nill:null = null;
// let notDefined:undefined;
// //by default any
// let anyUsage
// console.log(num,nm,flag,nill,notDefined)
// function fun():string{
//     return "Trying to have to fun....";
// }
// var fundoo = function():string{
//     return "haha lol....\uD83D\uDE00 \uD83D\uDE00"
// }
// console.log(fun());
// console.log(fundoo())
// //function usage
// function UsingParam(pRequried:boolean,pDefault:string="DBS_ID",pOptinal?:number,...pRest:string[]){
//     console.log(pRequried,pDefault,pOptinal,pRest);
// }
// UsingParam(false,"DBS-2345678")
// function arrayParams(pArr:string[]){
//     console.log(pArr)
// }
// function restParams(...pRest:string[]){
//     console.log(pRest+"\uD83D\uDE00")
// }
// arrayParams(['1','2']);
// restParams('1','2','3');
// function complicated(){
//     console.log("inside complicated!");
//     return function(){console.log("i will display if invoked only")
//             return function(nam:string){
//                 console.log("inside complicated subfunction "+nam)
//             }                
//         }
// }
// var result = complicated();
// result();
// complicated()(); //currying of function
// console.log(complicated())
// complicated()()("ammu");
// //self invokable function
// (function(){
//     console.log("A function")
// })();
// (function(){
//     console.log("inside complicated!");
//     return function(){console.log("i will display if invoked only")
//             return function(nam:string){
//                 console.log("inside complicated subfunction "+nam)
//             };             
//         };
// })();
// //lamda function
// // lambdas () => <value to return>
// ()=>{
//     console.log("a function");
//     return "a value"
// }
// var out=(a)=>(x,y)=> x+y+a;
// console.log(out(10)(20,30));
// //Reverse engineering
// (function(a){
//     return function(x,y){
//         return x+y+a
//     }
// })(10)(10,20);
var q = "7+2*4";
var result = "";
var num;
for (var i = 0; i < q.length - 1; i++) {
    if (q[i] == '*') {
        result = "(" + q[i - 1] + "," + q[i + 1] + ")";
        num = eval(q[i - 1] + "*" + q[i + 1]);
        q = q.slice(0, i - 1) + q.slice(i + 2) + eval(q[i - 1] + "*" + q[i + 1]);
    }
}
for (var i = 0; i < q.length - 1; i++) {
    if (q[i] == '+') {
        result = ("(" + q[i - 1] + ")=>" + result + "=>" + eval(q[i - 1] + "+" + num));
    }
}
console.log(result);
