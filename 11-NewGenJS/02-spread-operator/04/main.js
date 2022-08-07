const doubleAndReturnArgs = function (arr,...nums){
const newArr =[...arr,]
const tempArr = nums.map((item)=>item*2);
newArr.splice(newArr.length,0,...tempArr)
return newArr;//?
}

doubleAndReturnArgs([1, 2, 3], 4, 4); 