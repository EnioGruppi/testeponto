function validar() {
    const senha = document.getElementById('senha');
    const usuario = document.getElementById('usuario');

    if (usuario.value == "") {
        alert("Digite o nome de usuário");
        return false;
    }

    if (senha.value == "") {
        alert("Digite a senha.");
        return false
    }
    return true;
}

function enviarDescricao() {
    const dia = document.getElementById('dia');
    const descricao = document.getElementById('descricao');

    if (dia.value == "") {
        alert("Coloque uma data trabalhada");
        return false;
    }

    if (descricao.value == "") {
        alert("Coloque um descrição do que você fez no dia");
        return false
    }
    return true;
}


function salvarlogin() {
    if (!validar()) return;
    document.getElementById("login").submit();
}

function salvardescricao() {
    if (!enviarDescricao()) return;
    document.getElementById("descricao").submit();
}

