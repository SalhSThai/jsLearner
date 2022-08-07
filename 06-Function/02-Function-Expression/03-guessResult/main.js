//  function anonymous
//  56154
//  1764;
function magic (){
    return function (x){
        return x*42;

    };
}
const answer = magic();
console.log(answer);
console.log(answer(1337));
console.log(magic(1337)(42));