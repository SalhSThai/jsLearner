let arr1 = [1,2];
let arr2 = [3,4];
const arr = [
    {species : `cat`,name : `cha-nom`},
    {species : `dog`,name : `o-leang`},
    {species : `bird`,name : `jib`},
    {species : `cat`,name : `cha-chuk`},
    {species : `bird`,name : `mali`},
]
let array;

arr1.push(2)
arr1.unshift();
arr1.pop();
arr1.shift();

arr1.concat(arr2);
arr1.slice(0,2)


// arr1.splice(start[,deleteCount,elem1,...arr1,elemN]); mutate and return delete array 
arr1.splice(2,0,arr2);

arr1.indexOf(item[,from]); // หา NaN ไม่เจอ
arr1.lastIndexOf(item[,from]);
arr1.includes(item[,from]);   //ใช้หา NaN ได้
arr1.find(Fn)    // retuen value
arr1.findIndex(Fn)   // return index

const result = array.find(item => item.species == `bird`)
console.log(result)

array.filter(Fn) // fn return true/false สำหรับ เลือกตอนที่Filter ค้นหา

array.map(Fn) // fn return value ที่ละตัว เพื่อมาสร้าง Array ใหม่ 

array.sort(Fn)  // ถ้าไม่ใส่ Fn  จะเรียงแบบ String   Fn return >0 ทำการสลับ
array.reverse()
array.split(String) //ใส่ String ที่ต้องการใช้ แยกคำ
array.join(String) // ใส่ String  ที่ต้องการให้Array แต่ละตัว มารวมกัน

// ============ reducer ผู้สรุป
array.reduce(Fn,initial)
let value = arr.reduce(function(accumulator, item, index, array) ,0);  //return  num
//INSTANCE METHOD [1,2,34].method



//STATIC METHOD PROTOTYPE.method
// =========== is Array
Array.isArray();


// ======= object ===> Array
Object.keys(obj) // returns an array of keys.
Object.values(obj) // returns an array of values.
Object.entries(obj) // returns an array of [key, value] pairs.

// ================Array like Object 
let arr = Array.from(object);



//================= Map
let myMap = new Map([iterable]) // creates the map.
map.set(key, value) // stores the value by the key.
map.get(key) // returns the value by the key, undefined if key doesn’t exist in map.