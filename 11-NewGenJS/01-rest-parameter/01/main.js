const multiply = (number,...numbers) => {
    let sum = numbers.reduce((acc,item) =>  acc * item,number)
    return sum ;
}



multiply(2,2,2,2) //?