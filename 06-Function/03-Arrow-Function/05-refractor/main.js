let ask = (question , yes ,no) => {
   return confirm(question) ? yes():no();
}
let yes = x => alert(x)
let no = y => alert(y)
ask (`Do you agree? `,yes(`you agreeed`),no(`You cancled the execution.`))