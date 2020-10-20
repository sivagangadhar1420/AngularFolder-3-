function funn() {
    // alert(msg);
    // console.log(msg);
    for (var i = 0; i <= 5; i++) {
        console.log(i);
    }
}
funn();
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X is " + this.x + " and Y is " + this.y);
    };
    Point.prototype.graph = function (p) {
    };
    return Point;
}());
var res = new Point();
res.x = 1;
res.y = 2;
res.draw();
