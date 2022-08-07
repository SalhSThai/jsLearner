function isNum(check) {
    if (isNaN(check)) return false;
    else if (check == null) return false;
    else if (check.trim() == ``) return false;
    else return true;
}
let score = prompt("Enter your score:");
let verify = isNum(score);
let alertScore = (verify) ? (score>=0) ?  (score <= 50) ? alert("Your grade is F") : (score <= 60) ? alert("Your grade is D") : (score <= 70) ? alert("Your grade is C") : (score <= 80) ? alert("Your grade is B") : (score <= 100 && score >0) ? alert("Your grade is A") : alert("Your Enter invalid score") : alert("You Enter invalid score") : alert("You Enter invalid score");