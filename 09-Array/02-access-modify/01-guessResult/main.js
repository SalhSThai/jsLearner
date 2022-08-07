const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 3;
console.log(newArr[0]); // *

// 3 เพราะว่า การ assign  array = array อีกตัว หมายถึงการระบุ destination address เดียวกัน