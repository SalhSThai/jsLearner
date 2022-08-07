function clone(arr){
    let newArr = [];
    newArr = newArr.concat(arr);

    return newArr;
}

const a = [1, 5, 7, 11];
const b = [2, 3, 6];
const c = clone(a);
console.log(c);