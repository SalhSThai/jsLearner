// INPUT : Object  ที่ใช้ตรวจสอบ 
// OUTPUT : True == Object ว่าไม่มี KEY  , False == Object มีอย่างน้อย 1 Key 

function isEmptyObject(obj){
    // เข้า for loop เมื่อ object มี 1 key ขึ้นไป
    for(let key in obj){
        return false;
    }
    // มีเฉพาะ 0 key ที่หลุดมาบรรทัดนี้ได้
    return true;
}
const user_1 = {name : "CC12"};
const user_2 = {name : "CC12"};
const user_3 = {}