let input = prompt("Enter your score:") ;
let score = ((+input >= 0)&&(+input<=100)&&(!isNaN(+input))) ? +input:-1;
if (score>0) {
    if (score>50) {
        if (score>60) {
            if (score>70) {
                if (score>80)  alert("Your grade is A")
                else  alert("Your grade is B")
            } else  alert("Your grade is C")
        } else  alert("Your grade is D")
    } else  alert("Your grade is F")
} else alert("Invalid score")
