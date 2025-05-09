
function logar() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const url = `http://nomatv.fun/player_api.php?username=${usuario}&password=${senha}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.user_info && data.user_info.auth === 1) {
                localStorage.setItem('xtream_user', JSON.stringify(data));
                window.location.href = 'canais.html';
            } else {
                alert('Login inválido!');
            }
        })
        .catch(error => {
            alert('Erro ao conectar com o servidor.');
            console.error(error);
        });
}
