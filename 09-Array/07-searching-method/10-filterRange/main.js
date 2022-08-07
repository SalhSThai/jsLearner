const array = [1, 3, 4, 5, 6, 7, 8];
let filterArray = {};

const filterRange = function (arr, a, b) {
    arr = array.filter(item => (item >= a && item <= b));
    return arr;
}

let min = +prompt(`Enter Range Min :`);
let max = +prompt(`Enter Rang Max :`);

console.log(filterRange(filterArray, min, max));