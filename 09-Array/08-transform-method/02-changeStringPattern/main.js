let dashWord = `background-color`;
let CamelCaseConvertor = function (text) {
    let result = text.split('-');
    result = result.map((item, index) => (index > 0) ? item = item.replace(item[0], item[0].toUpperCase()) : item);//?
    return result.join(''); //?
};

dashWord = CamelCaseConvertor(dashWord); //?
console.log(dashWord);
