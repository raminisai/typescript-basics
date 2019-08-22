class Greetings{
    public strPop:string;
    private nunProp:number;
    protected safeProp:any;
    anonProp:any;
}
class SpecialGreetings extends Greetings{
    constructor(){
        super();
    }
}
///
var objGreetings = new Greetings();

