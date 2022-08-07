let myObj = {};
let key ;
let value ;
const SENTINEL = `stop` ;
do {
    let key = prompt(`Enter key name (stop for terminate) :`);
    if(key===SENTINEL||key===null||key.trim===``)break;
    let value = prompt(`Enter value for ${key} :`);
    if(value===SENTINEL||value===null||value.trim===``)break;
    myObj[`${key}`] = value;
    console.log(myObj);
} while (key!==`stop`||value!==`stop`);
console.log(myObj);
