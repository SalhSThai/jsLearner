let countDay = year => 365*(2021 - year) + Math.floor((2021-year)/4);
let year = prompt(`Count Day please Enter your birth year :`);
alert(`you are in the Earth ${countDay(year)} day`);