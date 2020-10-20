
function funn(){
    // alert(msg);
    // console.log(msg);
    for(var i=0; i<= 5; i++){
        console.log(i);
        
    }
    
} 
funn();

class Point{
    x:number;
    y:number;
    constructor(x:number, y:number){
        this.x=x;this.y=y;
    }
    get X(){
        return this.x;
    }
     X1(val){
        if(val < 10){
            // throw new Error("Value must be greater than 10");
            alert("eerror")
        }
        this.x = val;
    }
    draw(){
        console.log(`X is ${this.x} and Y is ${this.y}`);
    }
    graph(p:Point){

    }
}
let res:Point = new Point(1,2);
res.draw();
res.X1(5);
    