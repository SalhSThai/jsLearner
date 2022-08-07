
// ###### ACCESS BY DOT
// GET
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.address.road)
// console.log(person.address.district) // undefined

// ADD 

// person.salary = 5000;
// person.salary = 7000;
// console.log(person)


// UPDATE 
// console.log(person)
// person.firstName = "Michael"
// person.age = person.age + 1
// person.address.road = "Asia"
// console.log(person)


// Delete 
// delete person.age;

// console.log(person)
// console.log(person.age)


// ####### ACCESS BY SQUARE BRACKET []

// GET
// console.log(person['firstName']) // John
//console.log(person[firstName]) // Reference Error

// let a = 'age'
// console.log(person['age']) // 27
// console.log(person[a]) // 27  // computed key


// ADD 

// person.grauate school = {

// }

// person['grauate school'] = 'CodeCamp'
// console.log(person)


// ########## Property Short Hand

let username = "CC12"
let password = "1234"
let role = "ADMIN"

// const user = {
//     username :username,
//     password : password,
//     role : role
// }

const user = {
    username,
    password,
    role
}

console.log(user)

// #### IN OPERATOR

// const user = {
//     name: 'John',
//     age: 27
//   };
  
//   console.log('name' in user); // true user.name exists
//   console.log('birthDate' in user);



// ####### OPTIONAL CHAINING

// let user = {};
// console.log(user.address) // undefined
// console.log(user.address.province); // Error
//console.log(user.address ? user.address.province : undefined); // Fixed#1 : ternary
// console.log(user.address && user.address.province); // Fixed#2

// let user = {};
console.log(user.address?.province); // Short and clean