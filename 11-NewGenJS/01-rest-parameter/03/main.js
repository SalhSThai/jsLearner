const mergeObjects = (...objs) => {
    let reObj = objs.reverse();  
    let newObj = {};

    newObj = reObj.reduce((acc, item) => {
        Object.assign(acc, item)
        return acc;
    }, {})

    return newObj;//?
};

const obj1 = {num1:1}
const obj2 = {
    num2:2,
    num3:3,
    num1:4
}
mergeObjects(obj1,obj2);