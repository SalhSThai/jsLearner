let num = +prompt(`Enter number :`);
function twoFixed(num){
    return ((Math.floor(num*100))/100);
}
alert(`Show 2 digit : ${twoFixed(num)}`);