//forLoop_5 ให้เขียนโค้ดแสดงสูตรคูณตั้งแต่ แม่ 2 ถึง แม่ 12 โดยแสดงผลออกมาใน console  
// 2 x 1 = 2  
// 2 x 2 = 4  
// ...  
// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n
//forLoop_5
let row = ``;
let block = '';
for (let y = 2; y <= 12; y++) {
    for (let x = 1; x <= 12; x++) {
       row += `${y} x ${x} = ${y*x}\n`;
    }
    console.log(row);
    row = ``;
    
}