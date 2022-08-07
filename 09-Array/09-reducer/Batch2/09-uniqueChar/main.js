let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']


const cut = alphabets.reduce((acc, item) => {
    if (!acc.includes(item)) {
        acc.push(item)
    }
    return acc;
}, []); 
console.log(cut);