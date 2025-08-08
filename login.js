document.getElementById("btn-login").addEventListener("click", function () {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msgError = document.getElementById("msg-error");

  // Credenciales válidas para pruebas
  const validUser = "admin";
  const validPass = "1234";

  if (user === validUser && pass === validPass) {
    window.location.href = "index.html";
  } else {
    msgError.style.display = "block";
  }
});
