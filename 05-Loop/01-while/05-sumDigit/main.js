function isNum(check) {
    if (isNaN(check)) return false;
    else if (check == null) return false;
    else if (check.trim() == ``) return false;
    else return true;
}
let input = prompt("Enter a number.");
let digit = 0;
let sum = 0;
let verify = isNum(input);
let number = 0;
if (verify) {
    number = +input;
    while (number) {
        digit = number % 10;
        sum = sum + digit;
        number = (number - digit) / 10;
    }
    alert(`sumation of each digit are ${ sum }`);
} else {
    alert("You enter wrong number")
}

