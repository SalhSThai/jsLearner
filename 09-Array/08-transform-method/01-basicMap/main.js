const array_1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
console.log(`array_1`,
    array_1.map(item => item*2)
);

const array_2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
console.log(`array_2`,
    array_2.map(item => String(item))
);

const array_3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
console.log(`array_3`,
    array_3.map(item => typeof(item))
);

const array_4 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
console.log(`array_4`,
    array_4.map(item => item.toUpperCase())
);

const array_5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
console.log(`array_5`,
    array_5.map(item => (item%2==0)?`even`:`odd`)
);

const array_6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
console.log(`array_6`,
    array_6.map(item => (item>=0)?item:item*(-1))
);


const array_7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
console.log(`array_7`,
    array_7.map(item => item.toFixed(2))
);


const array_8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const convertor = function(){
     switch (item) {
            case 0: return item =`Jan`;
            case 1:return item =`Fab`; 
            case 2:return item =`Mar`; 
            case 3:return item =`Apr`; 
            case 4:return item =`May`; 
            case 5:return item =`Jun`; 
            case 6:return item =`Jul`; 
            case 7:return item =`Aug`; 
            case 8:return item =`Sep`; 
            case 9:return item =`Oct`; 
            case 10:return item =`Nov`; 
            case 11:return item =`Dec`; 
            default:return item = `NoN`; 
        }
}
console.log(`array_8`,
    array_8.map(item => {
        
       
    })
);

const array_9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
console.log(`array_9`,
    array_9.map((item,index) =>Math.sqrt( Math.sqrt(item)) )
);

const array_10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]
console.log(`array_10`,
    array_10.map(item => item = item.name)
);


const array_11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]
console.log(`array_11`,
    array_11.map(item => item = item.age)
);
const array_12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
console.log(`array_12`,
    array_12.map(item => item = item.name+` `+item.surname)
);
const array_13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
console.log(`array_13`,
    array_13.map(item => {
        let obj = {};
        let age =0;
        age = 2021 - +( item.birth.slice(0,4));
        obj.name = item.name;
        obj.birth = item.birth;
        obj.age = age;

        // return obj;
        return {...item,age:age}
        
    } )
);

const array_14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
const display = array_14.map(function(item,index,array){
    const MONTH = [`Jan`,`Fab`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`]
    let date = item.birth.slice(-2);
    let month = item.birth.slice(5,7);
    let monthName = MONTH[month-1]
    let year = item.birth.slice(0,4);
    return `<tr><td>${item.name}</td><td>${date} ${monthName} ${year}</td><tr>`
})
console.log(`array_13`,display);
