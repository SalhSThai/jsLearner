//{email: `cc@gmail.com`,isActive:false}
// Error user เป็น const ไม่สามารถ assign ค่าใหม่ให้ได้

let user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // *
  user = {};
  console.log(user); // ** 