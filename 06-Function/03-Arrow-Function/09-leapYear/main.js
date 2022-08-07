let isLeapYear = year => (year%4 ==0)||(year%400==0)
let year = prompt(`check year :`);
alert(`the year ${year} is ${isLeapYear(year)}`);