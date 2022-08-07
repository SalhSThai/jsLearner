let scoreCount = (win,draw) => win*3+draw*1;

let win = prompt("Enter win match :");
let draw = prompt("Enter draw match :");
alert(`Total score : ${scoreCount(win,draw)}`);