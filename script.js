
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (!user || !pass) {
    alert("Preencha usuário e senha.");
    return;
  }
  const url = `http://nomatv.fun/player_api.php?username=${user}&password=${pass}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.user_info && data.user_info.auth === 1) {
        window.location.href = "home.html";
      } else {
        alert("Login inválido.");
      }
    })
    .catch(err => alert("Erro ao conectar."));
}
