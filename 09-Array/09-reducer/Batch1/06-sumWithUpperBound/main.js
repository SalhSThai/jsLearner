let str = '31 45 12 67 34 86 23 37 19 41';

let sum = function(str){
    let array = str.split(' ');
    let sum = array.reduce((acc,item) => {
        if(item < 40) acc+=Number(item);
        return acc;
    },0);
    return sum;
}
console.log(sum(str));