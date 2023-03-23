function ChkPrime(num) {
    var isPrime = true;
    if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("".concat(num, " is a prime number"));
        }
        else {
            console.log("".concat(num, " is a not prime number"));
        }
    }
    return isPrime;
}
var num = 11;
ChkPrime(num);
