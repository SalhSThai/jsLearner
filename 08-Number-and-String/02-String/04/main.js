let searchText = prompt(`Enter :`);

let restrictionWord = function (text){ 
    text = text.toLowerCase();
    return text.includes('xxx')||text.includes('porn')||text.includes('sex')
};

if (restrictionWord(searchText)) {
    alert(`you search restriction word  `);
} else {
    alert(`you search : ${(searchText)}`);
}