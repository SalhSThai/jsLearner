let truncate = (str,length) => str.slice(0,length-1) +`...`;
let str = prompt(`Enter your word :`);
let length = 5;
 (str.length > length) ? alert(`${truncate(str,length)}`): alert(`${str}`);

    
