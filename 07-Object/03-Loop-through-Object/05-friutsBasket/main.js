//FriutsBasket 05
const MakeObject = function(obj){ // สร้าง Function สร้าง Object
    let name = prompt(`What friut you brought:`); // รับชื่อลงตัวแปร name
    let amoung= +prompt(`How many:`);     // รับจำนวนลงตัวแปร amoung
        if(amoung > 1)obj[`${name + `s`}`] = amoung;  //ตรวจสอบ จำนวน ถ้ามากกว่า 1  เพิ่มs ใน name และ นำมาสร้างkey value 
        else obj.name=amoung;
}
const fruitsBasket = {}
MakeObject(fruitsBasket);
console.log(fruitsBasket);