let listaNomes = [];

function adicionarNome() {
    let nome = document.getElementById("areaNome").value;
    
    if (nome.trim() === "") {
        alert("Por favor insira um nome valido.");
    }else {
        if (listaNomes.includes(formatarNome(nome))){
            alert("Nome já na lista");
        }else {
            listaNomes.push(formatarNome(nome));
            console.log(listaNomes);
            mostrarNomes();
            limparTexto();
        }
    }

}

function mostrarNomes() {
    let lista = document.getElementById("listaNomes");
    lista.innerHTML = "";

    for (nome of listaNomes) {
        let novaLista = document.createElement("li");
        novaLista.textContent = nome;
        lista.appendChild(novaLista);
    }
}

function sortear() {
    document.getElementById("botaoExcluir").hidden=true;
    document.getElementById("areaExcluir").hidden=true;
    document.getElementById("botaoEditar").hidden=true;
    document.getElementById("areaEditar").hidden=true;
    if (listaNomes.length > 0){
        let indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
        let vencedor = document.getElementById("nomeSorteado");
        document.getElementById("areaNome").hidden=true;
        document.getElementById("botaoEnviar").hidden=true;
        document.getElementById("nomeSorteado").hidden=false;
        vencedor.innerHTML = listaNomes[indiceAleatorio];
        listaNomes.pop(indiceAleatorio);
        mostrarNomes();
    }else {
        alert("Não tem nome para sortear");
        document.getElementById("areaNome").hidden=false;
        document.getElementById("botaoEnviar").hidden=false;
        document.getElementById("nomeSorteado").hidden=true;
    }
}

function formatarNome(nome) {
    let nomeFormatado = nome.toUpperCase();
    return nomeFormatado;
}

function limparTexto() {
    let texto = document.querySelector("input");
    texto.value = "";
}

function excluir() {
    document.getElementById("areaNome").hidden=true;
    document.getElementById("botaoEnviar").hidden=true;
    document.getElementById("nomeSorteado").hidden=true;
    document.getElementById("botaoEditar").hidden=true;
    document.getElementById("areaEditar").hidden=true;
    document.getElementById("botaoExcluir").hidden=false;
    document.getElementById("areaExcluir").hidden=false;
}

function removerNome() {
    let  limpar = document.getElementById("areaExcluir");
    let nomeRemover = document.getElementById("areaExcluir").value;
    let nome = formatarNome(nomeRemover);
    if (listaNomes.includes(nome)) {
        listaNomes.pop(nome);
        mostrarNomes();
        limpar.value = "";
        document.getElementById("areaNome").hidden=false;
        document.getElementById("botaoEnviar").hidden=false;
        document.getElementById("nomeSorteado").hidden=true;
        document.getElementById("botaoExcluir").hidden=true;
        document.getElementById("areaExcluir").hidden=true;
    } else {
        alert("Nome não está na lista");
    }
}

function editar() {
    document.getElementById("areaNome").hidden=true;
    document.getElementById("botaoEnviar").hidden=true;
    document.getElementById("nomeSorteado").hidden=true;
    document.getElementById("botaoExcluir").hidden=true;
    document.getElementById("areaExcluir").hidden=true;
    document.getElementById("botaoEditar").hidden=false;
    document.getElementById("areaEditar").hidden=false;
}

function editarNome() {
    let editarNome = document.getElementById("areaEditar");
    let nome = document.getElementById("areaEditar").value;
    let nomeLimpo = formatarNome(nome);
    if (listaNomes.includes(nomeLimpo)) {
        if (nome.trim() === ""){
            alert("Insira um nome valido.");
        }else {
            listaNomes.pop(nomeLimpo);
            editarNome.placeholder = "Insira o nome corrigido: "
            editarNome.value = "";
            mostrarNomes();
        }
    }else {
        if (nome.trim() === "") {
            alert("Insira um nome valido");
        }else {
            listaNomes.push(nomeLimpo);
            editarNome.value = "";
            mostrarNomes();
            document.getElementById("areaNome").hidden=false;
            document.getElementById("botaoEnviar").hidden=false;
            document.getElementById("nomeSorteado").hidden=true;
            document.getElementById("botaoEditar").hidden=true;
            document.getElementById("areaEditar").hidden=true;
        }
    }
}