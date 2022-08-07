function max(a , b = NaN, c = NaN, d = NaN) {
    let max ;
    for (let i = 0; i < arguments.length; i++) {
        max = (max >= arguments[i]) ? max : arguments[i];
    }
    return max;
}
console.log("Maximun number:", max());
console.log("Maximun number:", max(2));
console.log("Maximun number:", max(3, 1));
console.log("Maximun number:", max(7, 3, 9, 2));

// optional
let input = 0;
let pack = new Array;
for (let x = 0; x < 4; x++) {
    input = +prompt("Enter a number :");
    pack.push(input);
}
alert(`Maximum number is : ${max(pack[0], pack[1], pack[2], pack[3])}`)