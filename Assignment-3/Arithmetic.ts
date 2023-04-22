class Arithemetic
{
    Number1 : number;
    Number2 : number;
    constructor(A : number, B : number)
    {
        this.Number1 = A;
        this.Number2 = B;
    }
    Addition(): number
    {
        return this.Number1+this.Number2;
    }
    Substraction() : number
    {
        return this.Number1-this.Number2;
    }
    Multiplication(): number
    {
        return this.Number1*this.Number2;
    }
    Division(): number
    {
        return this.Number1/this.Number2;
    }
}
var obj1 = new Arithemetic(20,10);
var Ret : number = 0;
Ret = obj1.Addition();
console.log("Addition of obj1 : "+Ret);     // 30
Ret = obj1.Substraction();
console.log("Substraction of obj1 : "+Ret); // 10
Ret =obj1.Multiplication();
console.log("Addition of obj2 : "+Ret);     // 200
Ret = obj1.Division();
console.log("Substraction of obj2 : "+Ret); // 2