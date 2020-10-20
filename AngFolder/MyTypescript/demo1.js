var student = /** @class */ (function () {
    function student() {
        this.fullName = function () {
            return " Hello " + this.firstName + " " + this.lanstName;
        };
    }
    return student;
}());
var res = new student();
res.firstName = "sandeep";
res.lanstName = "soni";
alert(res.fullName());
function resFunn(fn, ln) {
    return "  NewWorld " + fn + " " + ln;
}
alert(resFunn("Vk", "ABD"));
function funn1(fn) {
    var msg = "Hello from function to";
    msg += fn.firstName + " " + fn.lanstName;
    return msg;
}
alert(funn1(res));
function funn121(firstName, lanstName) {
    var msg = "Hello from function to";
    msg += firstName + " " + lanstName;
    return msg;
}
alert(funn121("sandeep", "soni"));
function funn21() {
    var otp = "Helloworld";
    otp += "I am ready";
    return otp;
}
alert(funn21());
function funn12() {
    var msg11 = "Hello I am Second world";
    alert(msg11);
}
funn12();
