//forLoop_4 ให้เขียนโค้ดแสดงรูปดอกจันตามรูปแบบด้านล่าง โดยแสดงผลออกมาใน console

// ```
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 7 8


// ```

// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n

//forLoop_4
let num = +prompt("How many star you saw:");
let paragraph =``;
let alltext =``;
console.log("```\n");
for (let y = 1; y <= num ; y++) {
   for (let x = 1; x <= y; x++) {  
        paragraph += ` ${x} `;
   }
   console.log(`${paragraph}\n`)
   alltext += `${paragraph}\n`
   paragraph =``;
}
console.log("```");
alert(alltext);