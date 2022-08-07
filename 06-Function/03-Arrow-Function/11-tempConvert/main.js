let convertTemp = farenheit => ((farenheit-32)*5/9);
let temp = prompt(`Enter temparature in Farenheit :`);
alert(`Celsius is ${convertTemp(temp)}`);