class student{
    firstName:string;
    lanstName:String;
    fullName= function():string{
        return  " Hello "  +  this.firstName + " " + this.lanstName;
        }
}
var res:student=new student();
res.firstName = "sandeep";
res.lanstName = "soni";
alert(res.fullName());



function resFunn(fn:string, ln:string):string{
    return "  NewWorld " + fn + " " + ln; 
}
alert(resFunn("Vk", "ABD"))



function funn1(fn:any):string{
    var msg:string= "Hello from function to";
    msg += fn.firstName +  " " + fn.lanstName;
    return msg;
}
alert(funn1(res))


function funn121(firstName:string, lanstName:string):string{
    var msg:string= "Hello from function to";
    msg += firstName +  " " + lanstName;
    return msg;
}
alert(funn121("sandeep", "soni"))




function funn21(){
    var otp:string = "Helloworld";
    otp += "I am ready";
    return otp;
}
alert(funn21())

function funn12(){
    var msg11:string="Hello I am Second world";
    alert(msg11)
}
funn12();


