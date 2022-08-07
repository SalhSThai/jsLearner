const removeRandom = function (array){
    let newArray = [...array]
    let index = (Math.random()*array.length).toFixed(0);//?
    newArray.splice(index,1)
    return newArray;
}
const array = [1,2,3,4,5,6,7,8,9]
removeRandom(array);//?