let ucFirst = function(str){
    if(str == null) return `Not Text`
    str = str.trim();
    let firstChar = (str[0]);
   let restChar = (str.slice(1));
   return firstChar.toUpperCase()+restChar;
}

alert(`New Capitalise ${ucFirst(prompt(`Enter text tot convert`))}`)