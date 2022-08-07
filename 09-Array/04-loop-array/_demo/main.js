// Loop 4 แบบ  for, 
//for in,
//for of,
//for each

// let array = [`Apple`,`Orange`,`Banana`]
// //   Basic for
// for (let i = 0; i < array.length; i++) {
// }

// // for in
// for (const idex in array) {
//     console.log(array[index]);
// }

// // for of
// for (const item of array) {
//     console.log(item);
// }

// FOREACH
 // dot forEach;
 //a = item
 //b = index
 //c = salf
 let arr = [`Cat`,`Dog`,`Rat`,`Hippo`]
  function logname(item,index,array) {
    console.log(item,index);
 };
 arr.forEach(logname);



