let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
let targer = str.toLowerCase().split('');
let countData = targer.reduce((acc,item) => {
    if(item != ' ')
    acc[item] = acc[item]? acc[item]+1 : 1;
    return acc;

},{});
console.log(countData);
