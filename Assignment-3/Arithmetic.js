var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.Number1 = A;
        this.Number2 = B;
    }
    Arithematic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithematic.prototype.Substraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithematic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    Arithematic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(20, 10);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition of obj1 : " + Ret); // 30
Ret = obj1.Substraction();
console.log("Substraction of obj1 : " + Ret); // 10
Ret = obj1.Multiplication();
console.log("Addition of obj2 : " + Ret); // 200
Ret = obj1.Division();
console.log("Substraction of obj2 : " + Ret); // 2
