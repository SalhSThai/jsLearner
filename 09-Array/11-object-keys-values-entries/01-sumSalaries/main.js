// ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values และ Object.entries

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumKeys(object) {
    const array = Object.keys(object);
    let sum =0 ;
    array.forEach(item => sum += object[item] )
    return sum;
};
function sumValues(object) {
    const array = Object.values(object);
    const sum = array.reduce((acc, item) => acc + item,0);
    return sum;
};
function sumEntries(object) {
    const array = Object.entries(object);
    const sum = array.reduce((acc, item) => {
        acc += item[1];
        return acc;
    },0);
    return sum;

}
sumValues(salaries); //?
sumEntries(salaries);//?
sumKeys(salaries);//?