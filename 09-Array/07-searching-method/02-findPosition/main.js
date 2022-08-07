const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

let i = 0;
let arr = []; 
let charCheck = prompt(`Enter check character:`);

alphabets.forEach((item,index) => {
    if(item == charCheck)
    arr.push(index);
});

console.log(arr)
