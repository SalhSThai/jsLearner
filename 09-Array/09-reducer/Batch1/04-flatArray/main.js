let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];
let newArr = flattened.reduce((acc, item, index, array) => {
  acc.push(...item) // push item ลง ใน acc แต่ item เราเป็น Array [0,1] เราอยาก push ทั้ง 0 และ 1 เลย ใช้ ...item
  //return acc ที่ push แล้วไปรอบถัดไป
  return acc; //?  
}
  , []);
console.log(newArr);


// let newArr = flattened.join(',');
//     newArr = newArr.split(',');
//   console.log(newArr);