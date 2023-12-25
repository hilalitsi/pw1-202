function login(){
    // tangkap nilai yang di input user
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "hilal" && password === "123"){
        alert("login sukses");
        window.location.href = "succes.html";
        
    } 
    else {
        alert("Login Failed!");
    }
}