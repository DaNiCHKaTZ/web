function maxSum(arr: number[]): number {
    let sum: number = arr[0];
    let buf: number = arr[0];

    for (let i = 1; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        buf = Math.max(buf, sum);
    }

    return buf;
}

const arr = [1, 0, -4, 5, 6, -7,-2, 3, 8];
console.log(maxSum(arr));