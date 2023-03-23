function DisplayFactors(num) {
    for (var i = 1; i <= num; i++) {
        // check if number is a factor
        if (num % i == 0) {
            console.log(i);
        }
    }
}
var num = 20;
console.log("Display factorial numbers - ");
DisplayFactors(num);
