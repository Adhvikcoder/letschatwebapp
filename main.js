function adduser(){
    user_name = document.getElementById("username_input").value;
localStorage.setItem("user_name",user_name);

window.location="kwitteroom.html";
}