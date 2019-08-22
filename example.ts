import iOperations from './interfaceImple';
export class person implements iOperations{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    public name: string;
    public age: number;
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }

}

export function Sample(){

}

export class Employee extends person {
    constructor(name,age){
        super(name,age);
    }
}
// var obj=new Employee('teady',22);
// console.log(obj.getName())
// console.log(obj.getAge())

