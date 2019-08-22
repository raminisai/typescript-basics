function calss1(){
    this.propertyName="A is a property";
}
var obj = new calss1();
console.log(obj.propertyName)

/************** */
let num:number = 400.7
let nm:string = "joe"
let flag:boolean = false
let nill:null = null;
let notDefined:undefined;
//by default any
let anyUsage
console.log(num,nm,flag,nill,notDefined)
function fun():string{
    return "Trying to have to fun....";
}
var fundoo = function():string{
    return "haha lol....\uD83D\uDE00 \uD83D\uDE00"
}
console.log(fun());
console.log(fundoo())

//function usage
function UsingParam(pRequried:boolean,pDefault:string="DBS_ID",pOptinal?:number,...pRest:string[]){
    console.log(pRequried,pDefault,pOptinal,pRest);
}
UsingParam(false,"DBS-2345678")

function arrayParams(pArr:string[]){
    console.log(pArr)
}
function restParams(...pRest:string[]){
    console.log(pRest+"\uD83D\uDE00")
}

arrayParams(['1','2']);
restParams('1','2','3');
function complicated(){
    console.log("inside complicated!");
    return function(){console.log("i will display if invoked only")
            return function(nam:string){
                console.log("inside complicated subfunction "+nam)
            }                
        }
}
var result = complicated();
result();
complicated()(); //currying of function
console.log(complicated())
complicated()()("ammu");