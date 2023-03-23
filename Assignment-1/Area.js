function Area(radius) {
    var PI = 3.14;
    var Ans = radius * radius * PI;
    return Ans;
}
var radius = 5;
var res = Area(radius);
console.log("Area of Circle is : " + res);
