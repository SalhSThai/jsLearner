function checkPermission(role,yesFunc,noFunc){
    role ==`ADMIN` ? yesFunc():noFunc();
} 
let cPermission = (role,yesFunc,noFunc) => role == `ADMIN` ? yesFunc():noFunc();


let user = prompt(`Username :`);
checkPermission(user,() => alert(`ACCESS GRANTED`), function (){alert(`ACCESS DENIED`)});

cPermission(user,()=>alert(`Access`),()=>alert(`Denied`));