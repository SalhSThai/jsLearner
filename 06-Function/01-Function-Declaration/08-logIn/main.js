//function_08
function login(username,password){
    switch (true) {
        case (username == "admin" && password == "P@ssw0rd"):
            console.log("Successful")
            break;
    
        default:
            console.log("username or password wrong")
            break;
    }
}
login("admin","P@ssw0rd");