var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(r) {
        this.PI = 3.14;
        this.radious = r;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.radious * this.radious;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(data) {
        return _super.call(this, data) || this;
    }
    CircleX.prototype.CalculateCircumference = function () {
        return 2 * this.PI * this.radious;
    };
    return CircleX;
}(Circle));
var objCircle = new CircleX(12);
var ret = 0;
ret = objCircle.Area();
console.log("Area of circle is " + ret);
ret = objCircle.CalculateCircumference();
console.log("Circumference of circle is " + ret);
