function checkAge_If(age){
    if (age > 18 ) return true;
    return confirm("Did parents allow you?");
}
function checkAge_Ternary(age){
    check = (age > 18) ?  true : confirm("Did parent allow you?");
    return check;
    
}
function checkAge_Or(age){
   return (age > 18 ) || confirm("Did parent aloow you?")
}
