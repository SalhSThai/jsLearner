let factorial = num => {
    let sum =1;
    for (let i = 1; i <= num; i++) 
            sum *= i;    
    return sum;
}

let num = prompt(`Ente number to Factorial :`);
alert(`The Answer is ${factorial(num)}`);
