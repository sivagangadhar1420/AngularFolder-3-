// var nm:string = 'Gangadhar';
// var mbl:number = 9966860320;
// var bl:boolean = true;
// var msg:string = `Helloo ${nm} nd is this u r mobile number ${mbl}`
// alert(msg);
// let str:Array<string> = ["Ar", "Br"];
// let number:Array<number> = [12,3,4,5];
// 
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                        // Enum
// enum ff{Red, blue};
// let cl:ff= ff.Red;
// alert(cl)

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// var a:number=10;
// function finalFun(){
//     var a:number=100;
//     alert(a)
// }
// finalFun();
// alert(a)
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// let ar:number=20;
// function lfun(){
//     let ar:number=21;
//     alert(ar)
// }
// lfun();
// alert(ar)
// 
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// let ar1:string="Hello";
// if(true){
//     let ar1:string= "Welocome";
// }
// alert(" let " + ar1);
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// var ar1:string="Hello";
// if(true){
//     var ar1:string= "Welocome";
// }
// alert( "var" + ""+ar1);
// XXXXXXXXXXXXXXXxXXXXXXXXXXXXXxXXXXXXXXXXXXXxXXXXXXXXXXXXXxXXXXXXXXXXXXXxXXXXXXXXXXXXXxXXXXXXXXXXXXXxXXXXXXXXXXXXXxXXXXXXXXXXXXXxXXXXXXXXXXXXXx
var ar1:string[]= ["Nm", "nm1"];
var ar2:Array<string>= ["NM", "fm"];
var ar3:Array<number>= [1,2,3,4,5];
var ar4:Object = {fn:"Raju", ln:"Kumar", age:30};
var ar5:any= {fn:"Raju", ln:"Kumar", age:30};
var ar6:any= {fn:"Raju", ln:"Kumar", age:30};

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                    // ForIN(Arrayy)
// for(var ar in ar1){
//     alert(ar)
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for(var ar in ar4){

    // Keys And Values
    // alert(ar + " " + ar4[ar])
    // Keys
    // alert(ar);

    // alert(Object.keys(ar))
// alert(Object.length)
// }


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            //                                         // ForOf
            // for(var vals of ar3){
            //     alert(vals)
            // }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for(var vals of ar2){
//                 alert(vals)
//             }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for(var vals of ar2){
//     alert(vals)

// }            

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                // ArrayDestructuring
    // var [a1,a2,...b1]=[1,2,3,4,5,6];
    // alert(a1)
    // alert(a2)
    // alert(b1)

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   
                                                     // ObjectDestructuring
    // let ob1={a:"foo",b:"doe"};    
    // let {a:h1, b:h2} = ob1;
    // alert(h1 + " " + h2);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // let ob2={nm:"nm", fm:"fm", tm:"tm"};
    // let {nm,...restd1} = ob2;
    // alert(nm+ " " + restd1.fm + " " + restd1.tm );
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                            // Spread
                                        // var sp1:Array<number>=[1,2,3,4,5];
                                        // var sp2:number[]=[1,2,3,4,5,6,7,8,9];
                                        // var sp3:any=[,14,21,...sp1, ...sp2,12,12,1,31];
                                        // alert(sp3)
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//  class students12 {
//      firstName:string;
//      lastName:string;
//      id:number;
//      constructor(fn:string, ln:string ,id:number){
//          this.firstName = fn;
//          this.lastName = ln;
//          this.id=id;

//      }
//      public fullname():any{
//          return `FllName is ${this.firstName}  ${this.lastName} and Id is ${this.id}  `
//      }
//  }
//  var gr:students12=new students12("Raaju", "Kumar", 1);
//  alert(gr.fullname());
// //  alert(gr.firstName +  " " + gr.lastName + " " + gr.id) 
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// class students123 {
//     firstName:string;
//     lastName:string;
//     id:number;
//     constructor(fn:string, ln:string ,id:number){
//         this.firstName = fn;
//         this.lastName = ln;
//         this.id=id;

//     }
//     public get fullname():string{
//         return `Getting FllName is ${this.firstName}  ${this.lastName} and Id is ${this.id}  `
//     }
//     public set fullname(name:string){
//         this.firstName = name.split( ' ')[0];
//         this.lastName = name.split(' ')[1];
        
//     }
//     public holidays(a):any{
//         return `${this.firstName} needs ${a} nof days `
//     }
// }
// class employee extends students123{
//         dob:Date;
//         constructor(firstName, lastName,id, DOB:Date){
//         super(firstName,lastName,id);
//         this.dob=DOB;
//     }
//     public dateofbirth(){
//         return `Age of ${this.firstName} is ${this.dob}`
//     }
//     static salary(a):any{
//         return `Salary of ${a}`
//     }
//    public prices(cp):any{
//         return `${this.firstName} costs of  ${cp} ` 
//     }
    

// } 
        
// // var gr:students123=new students123("Raaju", "Kumar", 1);

// // alert(gr.fullname());
// //  alert(gr.firstName +  " " + gr.lastName + " " + gr.id) 

// var br:employee = new employee("Raju", "Kumar", 1, new Date('1/1/2020'));
// // alert(br.fullname + " " + br.dob + br.firstName) ;

// // alert(br.dateofbirth());
// // alert(br.firstName + " " + br.lastName + br.fullname + "Date Of B "+
// // + " "  + br.prices(9) + + "  " +  br.dob + " SAlary" + employee.salary(400 + "k") + " " + br.holidays(5) );

// // br.firstName = "Abc xyz";
// // alert(br instanceof employee);
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                                // Functions
    // function  funn1(a:number, b:number, c?:number) {
    //     if(!c){
    //         c=0;
    //     return a+b+c;
    // }
        
    // }
    // alert(funn1(10,20))
    // alert(funn1(10,20,30))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // function  funn1(a:number, b:number, c:number=0) {
      
    //     return a+b+c;
    // }
    
    // alert(funn1(10,20))
    // alert(funn1(10,20,30))
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function name1(a:number=0, b:number=0, c:number=0) {
//     return a+b+c;
    
// }
// alert(name1(2,2,3))
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function  funn1(...a:[]) {
//     var x:number=0;
//     for(var i=0; i<a.length; i++){
//         x += a[i];

//     } 
//     return x;
// }
// alert(funn1(10,2030,50))
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // function funn1(...a:[]) {
    //     for(var x in a){
    //         x += a[x]
    //     }
    //     return x;

    // }
    

// alert(funn1(10,20,30))

// alert(funn1(10,20,30,40,50,60))
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function  funn1(x,y) {
//     if(typeof x == "number"){
//         return x+y;

//     }  
// }

// alert(funn1(10,20))
// alert(funn1("x",10)); 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function  funn1(x,y:string) {
//     if(typeof x == "number"){
//         return x+y;
//     }
//     else{
//         return x+ " " + y
//     }

// }
// alert(funn1(10,"y"))
// alert(funn1("x","y"));
//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let sub:any=(x:number, y:number)=>{
//     return x-y
// } 
// alert(sub(20,10))
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                        
