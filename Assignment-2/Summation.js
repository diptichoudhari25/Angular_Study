function Summation() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var Sum = 0;
    var Cnt = 0;
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        Sum = Sum + Arr[Cnt];
    }
    return Sum;
}
var Ret = 0;
Ret = Summation(23, 6, 7, 4, 5, 7);
console.log("Addition is : " + Ret);
