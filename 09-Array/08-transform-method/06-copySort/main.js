let arr = ['React', 'Vue', 'Angular'];


let copySorted = function(array){
    let copy = [...array];
    return  copy.sort();
}
let sorted = copySorted(arr);


console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)