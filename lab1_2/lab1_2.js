function maxSum(arr) {
    var sum = arr[0];
    var buf = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        buf = Math.max(buf, sum);
    }
    return buf;
}
var arr = [1, 0, -4, 5, 6, -7, -2, 3, 8];
console.log(maxSum(arr));
