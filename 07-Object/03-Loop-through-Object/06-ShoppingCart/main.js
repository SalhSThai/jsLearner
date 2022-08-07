//Shopping_cart 06
const MakeObject = function(obj){ // สร้าง Function มารับค่า เพื่อ สร้าง Object 
        obj.name = prompt(`Enter item name:`);
        obj.amoung = +prompt(`how many :`);
        obj.price = +prompt(`How much :`);
        obj.discount = +prompt(`Discount percent:`);
}
function discount(obj){ // Function ทำราคาหลังหักส่วนลด
        obj.price = obj.price - (obj.price*obj.discount/100);
        delete obj.discount;
}
const cart = {};  // สร้าง Object ว่าง
MakeObject(cart); // นำ Object ว่างไปรับค่า
discount(cart); // ทำการหักส่วนลด
console.log(cart);
