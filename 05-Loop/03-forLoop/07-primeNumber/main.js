// //C = a * b ex. 25 = 5 * 5
// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     // for (let j = 2; j < Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime === true) {
//     //or if (isPrime) {
//     console.log(i);
//   }
// }
//ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
//forLoop_7
let prime = 0;
let text = ``;
let count = 0;
for (let y = 2; y <= 100; y++) {
  for (let x = 2; x <= y; x++) {
    (y % x == 0) ? count++ : null;
    if ((count == 1) && (x == y)) {
      prime = y;
      console.log(`Prime : ${prime}`);
      text += `${prime}\n`;
    } 
  }
  count = 0;
}
 alert(text);

 // จำนวนเฉพาะ สามารถตรวจสอบ ถึงแค่ Squrt root ของ ตัวนั้นๆได้ 
