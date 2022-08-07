const cloneObject = function(obj){
const newObj = {...obj}
return newObj;
}


const obj = {
    num2:2,
    num3:3,
    num1:4
}
cloneObject(obj); //?