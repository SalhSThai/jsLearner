let isPrime = prime => {
    for (let i = 2; i < prime; i++) {
        if(prime%i==0){
            return false;
        }             
    }return true;
}
let num = prompt(`Enter number to check prime :`);
if (isPrime(num)) alert(`${(num)} is prime number `);
else alert(`${(num)} is not prime number `);
