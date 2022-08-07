const arr = [2, 3, 5, 7, 11];
function squareArr(array) {
    let newArr = new Array;
    for (const index in array) {
        newArr[index] = array[index]**2;
    }
    return newArr;
}
const arr_2 = squareArr(arr); // [4, 9, 25, 49, 121]
console.log(arr_2);

