let extractCurrencyValue = (string,rate) => `THB ` + +(string.slice(1))*rate;

console.log(extractCurrencyValue('$120', 30));