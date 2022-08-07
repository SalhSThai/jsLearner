let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let INIT = {
    max: arr[0],
    min: arr[0]
};
let sortArr = arr.reduce((acc, item) => {
    if (acc.max < item) acc.max = item
    if (acc.min > item) acc.min = item
    return acc
}, INIT);
console.log(sortArr);