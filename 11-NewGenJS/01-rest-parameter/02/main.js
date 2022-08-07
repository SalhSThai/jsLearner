const filterOutOdds  = (...nums) => {


let arr = nums.filter(item=> (item%2==0)?item:null);


return arr;
};


console.log(filterOutOdds(1,2,3,4,5,6,7,8) );