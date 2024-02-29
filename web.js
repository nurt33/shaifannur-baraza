const username = "admin";
const password = "admin";

function goToBiodata() {
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  if (inputUsername === username && inputPassword === password) {
    window.location.href = "biodata.html";
    return false;
  } else {
    alert("Username atau password salah");
    return false;
  }
}