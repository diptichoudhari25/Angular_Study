function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
var num = 21;
for (var i = 0; i < num; i++) {
    var res = fibonacci(i);
    if (res > num) {
        break;
    }
    else {
        console.log(res);
    }
}
