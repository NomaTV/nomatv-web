
const dns = "http://nomatv.fun";

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  if (!user || !pass) {
    alert("Preencha usuário e senha.");
    return;
  }

  const url = `${dns}/player_api.php?username=${user}&password=${pass}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data && data.user_info && data.user_info.auth === 1) {
        localStorage.setItem("xtream_user", user);
        localStorage.setItem("xtream_pass", pass);
        window.location.href = "home.html";
      } else {
        alert("Login inválido.");
      }
    })
    .catch(() => alert("Erro ao conectar."));
}
