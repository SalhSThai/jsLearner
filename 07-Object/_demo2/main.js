// Object Declaration # 1
// object = collection of key - value Pair
const myObj = new Object;

// Object Literal
const myObjLi = {};
const person  = {
    // Primetive Type
    firstName :`John`,
    lastName:`Doe`,
    age : 27,
    isAdmin : true,
    Child:null,
    // Object Type
    address :{
        road: "Sukhumvit",
        province:"Bangkok"
    },
    //Method ฟังชั่น ภายใต้ Object เรีัยก Method
    sayHi : function(){
        alert(`Hello`)
    }
}

//=================================Access:GET by .Dot
person.firstName;
console.log(person.lastName);

//Update :SET
person.firstName = `Michael`;
console.log(person.firstName);

//Add new property to Object
person.salary = 5000;

//Delete
delete person.age;

//================================Access: by Square Bracket

//GET
person[`firstName`];
console.log(person[`firstName`]);
let lName = `lastName`;
console.log(person[`lastName`]);

//ADD
person[`grauate school`] = `Codecamp`

//===================================  Property Shorty Hand
username = `person`;
password = `1234`;
role = `Admin`
const user = {
     username : username,
     password : password,
     role : role 
};

//   ======>
const user2 = {
    username,
    password,
    role
}

//  IN OPERATOR
console.log(`password`in user2);

// OPTIONAL CHAINING
console.log(user.address ? user.address.province: undefined);  //#1
console.log(user.address&&user.address.province);  //#2
//Chaining
console.log(user.address?.province);