var nums = [1,2,3,4,5]
console.log(1 in nums)

// for each(var item in items){}

nums.forEach(element =>{
    console.log(element)
})

console.log("using for--in")

for (let x in nums){
    console.log(nums[x]);
}

console.log("using for--of")
for(let x of nums){
    console.log(x)
}
//tuple usage

var aTup = [1,'hello',[2,3,4,5],{key:'value'}]

aTup.forEach(item =>{
    if(typeof(item) == 'number'){
        console.log(item+" it is number")
    }
    else if(typeof(item) == 'object'){
        try{
            var temp:Array<number> = <Array<number>>(item)
            console.log(temp)
        }
        catch(error){
            console.log("it is not an array")
        }
    }
})
//unions
function unionFunction(pParameter:string | string[]){
    console.log(pParameter)
}
unionFunction("sai")
unionFunction(["sai","ammu"])

//var vs let

var a = 10
let b = 20
if(a==10){
    var c = 30
}
console.log(c)
if(b==10){
    let d = 30
}
console.log(d)
