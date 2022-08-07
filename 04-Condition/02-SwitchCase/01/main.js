function isNum(check) {
    if (isNaN(check)) return false;
    else if (check == null) return false;
    else if (check.trim() == ``) return false;
    else return true;
}
let input = prompt("Enter 1, 0, -1");
let verify = isNum(input);
 input = (verify) ? +input :-2;
switch(+input){
    case (1) :
        alert("One");
        break;
    case (0) :
        alert("Zero");
        break;
    case (-1) :
        alert("Minus Zero");
        break;
    default:
        alert("Invalid number");
        break;
}