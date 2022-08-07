let num ;
let sum = 0;
let i = 0;
do {
    i++;
    num = +prompt(`Enter Number no.${i}`)
    if(!isNaN(num)){
        sum += num
    }
} while (num&&!isNaN(num));
alert(`Average ${sum/i}`)