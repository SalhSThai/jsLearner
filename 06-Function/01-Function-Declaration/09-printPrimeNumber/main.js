//function_09
// function isPrime(num) {
//     let count = 0;
//     let text = ``;
//     let prime = 0;
//     let check = false;
//     for (let y = 2; y <= num; y++) {
//         for (let x = 2; x <= y; x++) {
//             (y % x == 0) ? count++ : null;
//             if (count == 1 && y == x) {
//                 prime = y;
//                 text += `${prime} `;
//                 console.log(prime)
//             }
//             (y == num && count == 1 && x == y) ? check=true:null; 
//         }
//         count=0;
//     }
//     document.write(`Prime : ${text}`);
//     alert(`Prime : ${text}`)
    

//     return check ;
// }
// let input =prompt(`what your number u wnat to show: `)
// isPrime(input);

function checkPrime(num){
    let booPrime = true;
    for (let i = 2; i < num; i++) {
      
        if(num%i==0)  {
            booPrime = false;
            break;
        }
        
    }
    return booPrime
    
}
let input = prompt(`Enter a number :`);
if (checkPrime(input)){
    alert(`${input} : is Prime `);
}
else alert(`${input}: Not Prime `);
