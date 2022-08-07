// parameter : Input = number ,string, boolean, null, undefined
// call bac kparameter : Input = function

function myFunction (a,b,callback){
    console.log(a,b);
    return a*b;

}
console.log(myFunction(3,4))
myFunction(3,4,console.log);
myFunction(3,4,alert);
myFunction(3,4,myLog);

function myLog(a,b){
    console.log(`Hello world ${a} + ${b}`);
}