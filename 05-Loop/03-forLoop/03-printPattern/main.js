//forLoop_3 ให้เขียนโค้ดแสดงรูปดอกจันตามรูปแบบด้านล่าง โดยแสดงผลออกมาใน console
// ``
// *
// *	*
// *	*	*
// *	*	*	*
// ``
// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n
//forLoop_3
let star = +prompt("How many star you saw:");
let paragraph =``;
let alltext =``;
console.log("```\n");
for (let y = 1; y <= star ; y++) {
   for (let x = 1; x <= y; x++) {  
        paragraph += ` * `;
   }
   console.log(`${paragraph}\n`)
   alltext += `${paragraph}\n`
   paragraph =``;
}
console.log("```");
alert(alltext);