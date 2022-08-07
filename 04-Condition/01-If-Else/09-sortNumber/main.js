let input_1 = prompt("Enter your first score:");
let verify_1 = isNum(input_1);
let input_2 = prompt("Enter your second score:");
let verify_2 = isNum(input_2);
let input_3 = prompt("Enter your third score:");
let verify_3 = isNum(input_3);
if (verify_1&&verify_2&&verify_3) {
    if (input_1 > input_2) {
        if (input_1 > input_3) {
            if (input_2 > input_3) alert(`${input_1} > ${input_2} > ${input_3}`)
            else alert(`${input_1} > ${input_3} > ${input_2}`)
        }
        else alert(`${input_3} > ${input_1} > ${input_2}`)
    } 

    else {
        if (input_2 > input_3) {
            if (input_1 > input_3)  alert(`${input_2} > ${input_1} > ${input_3}`)
            else alert(`${input_2} > ${input_3} > ${input_1}`) 
        } 
        else  alert(`${input_3} > ${input_2} > ${input_1}`)
        
    }
} 
else alert("Your enter invalid score")
function isNum(check) {
    if (isNaN(check)) return false;
    else if (check == null) return false;
    else if (check.trim() == ``) return false;
    else return true;
}