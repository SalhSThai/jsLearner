//This  summarize
//this ใช้บอกตำแหน่งของ Code ที่ทำงานอยู่ ว่าอยู่บน Object อะไร
console.log(this,`window`); // this จะอยู่บน  Window Object
const objectA = new Object; //Declaration empty ObjectA
const objectB = {};          //Literal declaration empty ObjectB
         
//Function Expression
const MakeObject_1 = function(){ // Function แยก เป็น 2 ส่วน 1.การทำงาน 2.การนำไปสร้างObject (Construction Function)
        this.username; //(ใช้สร้างบน Object ที่เรัยกใช้งาน) object จะมี Key ชื่อ username value = undefined
        this.password; //(ใช้สร้างบน Object ที่เรัยกใช้งาน) object จะมี Key ชื่อ password value = undefined
       let username; //(ทำงาน) เมื่อ เรียกใช้ Function จะสร้าง ตัวแปร ชื่อ username
       let password; //(ทำงาน) เมื่อ เรียกใช้ Function จะสร้าง ตัวแปร ชื่อ password

        console.log(this,`MakeObject_1`); //(ทำงาน)

        read = function(){  //(ใช้สร้างบน Object ที่เรัยกใช้งาน) object จะมี Key ชื่อ read value = function()
            this.username = `username`; //(ใช้สร้างบน Object ที่เรัยกใช้งาน) object จะมี Key ชื่อ username value = username`
            password = `1234;`; // (ทำงาน) let password จะถูก Assign 1234
        }
}
//function Declaration
function MakeObject_2(){}




MakeObject_1();
const objectMake_A = new MakeObject_1();
objectMake_A.read(); 
console.log(objectA,`objectA`);