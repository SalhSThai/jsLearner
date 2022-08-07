const array = [29, 17, 13, 47, 23, 31];
let sum =0;
function Loop(item,index,array){
sum += +item;
console.log(`sum`,sum,`item`,item);
}
array.forEach(Loop);