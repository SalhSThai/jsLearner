const state1 = { username: 'john', point: 100, loading: true };
const copyObject = function(obj,target){
    obj = Object.assign(obj,target,{loading:false},{point:75},{property:"success"});

}
const state2 = {};
copyObject(state2,state1);
console.log(state2);