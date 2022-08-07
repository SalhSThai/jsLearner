let n_1;
let n_2;
let i =0;

n_1 = +prompt("Player one Input 1-99 Number:");
if (!isNaN(n_1)&&n_1&& (n_1<=99)) {

    do {
        n_2 = +prompt("Player two guess 1-99 Number:");
        if (!isNaN(n_2)&&(n_2)&& (n_1<=99)) {
            if (n_2 < n_1) {
                alert(`YourNumber ${n_2} are Less than `);
            }
            else if(n_2 > n_1) {
                alert(`YourNumber ${n_2} are Greater than`);
            }
            else {
                alert(`Answer is ${n_1} your Attempt ${i}`)
                break;
            }
        } else {
            alert(`Not a Number`)

        }
        i++;
    } while (n_2);

} else {
    alert(`Not a Number`)

}