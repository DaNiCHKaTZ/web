function findElements(firstArr, secondArr, thirdArr) {
    var newArr = [];
    function isInArray(element, array) {
        return array.indexOf(element) !== -1;
    }
    for (var i = 0; i < firstArr.length; i++) {
        if (isInArray(firstArr[i], secondArr) && !isInArray(firstArr[i], thirdArr)) {
            newArr.push(firstArr[i]);
        }
    }
    for (var i = 0; i < secondArr.length; i++) {
        if (isInArray(secondArr[i], thirdArr) && !isInArray(secondArr[i], firstArr)) {
            newArr.push(secondArr[i]);
        }
    }
    for (var i = 0; i < firstArr.length; i++) {
        if (isInArray(firstArr[i], thirdArr) && !isInArray(firstArr[i], secondArr)) {
            newArr.push(firstArr[i]);
        }
    }
    return newArr.filter(function (value, index, self) { return self.indexOf(value) === index; });
}
var firstArr = [1, 2, 3, 4, 5];
var secondArr = [4, 5, 6, 7];
var thirdArr = [1, 7, 8, 9];
var result = findElements(firstArr, secondArr, thirdArr);
console.log(result);
