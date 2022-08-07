const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };


const newProducts = products.reduce((acc, item) => {
    acc[item.id] = acc[item.id] ? item.name : item.name;
    return acc; //?
}, {});
console.log(newProducts); //?