let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  let multiplyNumeric = function(obj,num){
     const result = {};
    for (const key in obj) {
       if (typeof(obj[key]) == `number`) {
        result[key] = obj[key]*num; 
       } else result[key] = obj[key];
       
    }
    return result;
  };
  console.log(menu);
  console.log(multiplyNumeric(menu,5));