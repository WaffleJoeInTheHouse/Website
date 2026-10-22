function compareLogin(event){
    event.preventDefault();

    const USERNAME = "Yvonne";
    const PASSWORD = "1234";
    const userName = document.getElementById("username").value;
    const passWord = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    if(userName === USERNAME && passWord === PASSWORD){
        alert("Login Successful!");
        window.location.href = "message.html";
    }else{
        alert("Invalid Username or Password!");
        errorMessage.textContent = "Invalid Username or Password!";

    }
}

const myLogInButton = document.getElementById("btnLogIn");
myLogInButton.addEventListener('click', compareLogin);
