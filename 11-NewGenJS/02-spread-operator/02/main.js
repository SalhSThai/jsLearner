const Spread_operator  = function (array1){
let array=[...array1];
array[3] = Math.pow(array[3],2) ;
return array;
}

const array1 = [1,2,3,4,5,6,7,8,9];
const newArr = Spread_operator(array1);//?
console.log(newArr);
