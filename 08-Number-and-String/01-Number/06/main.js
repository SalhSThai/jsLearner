function random(min , max){
     let random = Math.random()*(max-min);
     let result = (min+random).toFixed(2);
     return result;
}
alert(random(2,9));