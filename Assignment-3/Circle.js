var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle.prototype.CalculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var Ret = 0;
var obj = new Circle(10);
Ret = obj.CalculateArea();
console.log("Area is : " + Ret);
var obj2 = new Circle(15);
Ret = obj2.CalculateArea();
console.log("Area is : " + Ret);
