const object = {key:1} ;

const checkEmptyObj = obj=>(Object.entries(obj).length == 0) ? true : false;

console.log(checkEmptyObj(object));//?