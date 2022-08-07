let _username = prompt("username");
let _password = prompt("password");

// ดัก String
if ((_username == null)||(_username.trim == '')) {
    alert("username is required");
    if((_password === null)||(_password.trim === '')){
        alert("password is required");
    }
} 
else if ((_password === null)||(_password.trim === '')) {
    alert("password is required");
}
else{
    if ((_username === "admin" && _password && "1234")||(_username === "john" && _password && "qwerty")) {
        alert(`Hello ${_username}`)
    } else {
        alert(`invalid username or password`)
    }
}