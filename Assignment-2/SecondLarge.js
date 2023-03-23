function findSecondLargestElem(arr) {
    var first = -1, second = -1;
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    return second;
}
var arr = [12, 35, 1, 10, 34, 1];
var ret = findSecondLargestElem(arr);
console.log("Second Maximum number is " + ret);
