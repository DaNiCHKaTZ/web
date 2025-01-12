function findElement(firstArr: number[], secondArr: number[], thirdArr: number[]): number[] {
    let newArr: number[] = [];

   
    function isInArray(element: number, array: number[]): boolean {
        return array.indexOf(element) !== -1;
    }

    
    for (let i = 0; i < firstArr.length; i++) {
        if (isInArray(firstArr[i], secondArr) && !isInArray(firstArr[i], thirdArr)) {
            newArr.push(firstArr[i]);
        }
    }

    
    for (let i = 0; i < secondArr.length; i++) {
        if (isInArray(secondArr[i], thirdArr) && !isInArray(secondArr[i], firstArr)) {
            newArr.push(secondArr[i]);
        }
    }

    for (let i = 0; i < firstArr.length; i++) {
        if (isInArray(firstArr[i], thirdArr) && !isInArray(firstArr[i], secondArr)) {
            newArr.push(firstArr[i]);
        }
    }

    
    return newArr.filter((value, index, self) => self.indexOf(value) === index);
}


let firstAr = [1, 2, 3, 4, 5];
let secondAr = [4, 5, 6, 7];
let thirdAr = [1, 7, 8, 9];

let resul = findElements(firstArr, secondArr, thirdArr);
console.log(result);  
