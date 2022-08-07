function throwDice(){
    let max = 6;
    let min = 1;
    let random = Math.random()*(max-min+1);
    let result = Math.floor(min+random);
    return result;
}
alert(`Dice : ${throwDice()}`);