//forLoop_2 ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้
// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let allsum = 0;
let sumEven = 0;
let sumOdd = 0;
let evenSq = 0;
let thirdSq = 0;
for (let i = 1; i <= 100; i++) {
    allsum += i
    if (i % 2 == 0) {
        sumEven += i
        evenSq += i ** 2;
    }
    else sumOdd += i;
    if (i % 3 == 0) {
        thirdSq += i ** 2;
    }
}
alert(`All sum = ${allsum}\n
Even sum = ${sumEven}\r
Odd sum = ${sumOdd}\n
Even2 - Odd2 =${evenSq - thirdSq} `);