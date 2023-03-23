
function Maximum(Arr) {
    var max = Math.max.apply(Math, Arr);
    return max;
}
var Arr = [23,89,6,29,56,45,77,32];
var Ret = 0;
Ret = Maximum(Arr);
console.log("Maximum Number is : " + Ret);

