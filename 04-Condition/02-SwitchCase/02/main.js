let a = +prompt("a?");
switch (true) {
    case (a == 0):
        alert("0");
        break;
    case (a == 1):
        alert("1");
        break;
    case ((a == 2 || a == 3)):
        alert("2,3");
        break;
    default:
        alert("Invalid number");
        break;
}
switch (a) {
    case (0):
        alert("0");
        break;
    case (1):
        alert("1");
        break;
    case (2):
        alert("2,3");
        break;
    case (3):
        alert("2,3");
        break;
    // case (2 || 3): ไม่ได้ เพระา 2 true เสมอ 
    //     alert("2,3");
    //     break;
    default:
        alert("Invalid number");
        break;
}