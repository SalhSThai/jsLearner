const names = ['Mike', 'Sid', 'Jack', 'Bill'];
function print(item,index,array){
console.log(index,`.`,item);
}
console.log(names.forEach(print));