
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (!user || !pass) {
        alert("Preencha os campos.");
        return;
    }
    const url = `http://nomatv.fun:8080/player_api.php?username=${user}&password=${pass}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.user_info && data.user_info.auth === 1) {
                localStorage.setItem("user", user);
                localStorage.setItem("pass", pass);
                window.location.href = "canais.html";
            } else {
                alert("Login inválido.");
            }
        })
        .catch(() => alert("Erro ao conectar."));
}
