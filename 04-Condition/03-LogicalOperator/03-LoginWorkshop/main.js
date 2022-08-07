let user = prompt("What your name") || "guest";
if (user == "codecamp") {
    password = prompt("What is your password");
    if (password == "123456") {
        user = "codecamp";
        alert(`Welcome ${user}`);
    } else {
        alert("Wrong password");
    }
} 
else {
    user = "guest";
    alert(`Welcome ${user}`);
}

