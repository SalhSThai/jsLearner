
let user = {
    name: 'John',
    years: 27
  };

  function destructuring({name,years:age,isAdmin = true}){
    let obj = {name,age,isAdmin};
    Object.assign(obj)
    return obj;
  }

  destructuring(user)//?