let _input = prompt("Enter Number");

// ดัก Number
if (_input == null || _input == `` || _input.trim() == `` || isNaN(_input)) {
    alert("Invalid number")
}
else {



    if (_input > 0) {
        alert("Positive number")
    }
    else if (_input < 0) {
        alert("Negative number")
    }
    else if (_input == 0) {
        alert("Zero")
    }
    else {
        alert("Invalid number")
    }
}
