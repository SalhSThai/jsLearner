let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

const getAverageAge = function(array){
    let avg = arr.reduce((acc,item) => acc +item.age,0 );
    return (avg/arr.length).toFixed(2);
}
console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33