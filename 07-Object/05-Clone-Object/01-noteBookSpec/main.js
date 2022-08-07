const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
};
const clone = Object.assign({}, notebook);
const clone2 = {};

let copy = function (clone, obj) {
    for (const key in obj) {
        clone[key] = obj[key];

    }
}

copy(clone2, notebook);
console.log(clone);
console.log(clone2);
