let listaNomes = [];

function configurarEnter(idElemento, funcaoParaExecutar) {
    const campoInput = document.getElementById(idElemento);
    if (campoInput) {
        campoInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                funcaoParaExecutar();
            }
        });
    }
}

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
            mostrarNomes(listaNomes);
            limparTexto();
        }
    }
}

function mostrarNomes(nomes) {
    let lista = document.getElementById("listaNomes");
    lista.innerHTML = "";

    for (nome of nomes) {
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
        let vencedor = document.getElementById("nomeSorteado");
        let indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
        document.getElementById("areaNome").hidden=true;
        document.getElementById("botaoEnviar").hidden=true;
        document.getElementById("nomeSorteado").hidden=false;
        vencedor.innerHTML = listaNomes[indiceAleatorio];
        listaNomes.splice(indiceAleatorio, 1);
        mostrarNomes(listaNomes);
    }else {
        alert("Não tem nome para sortear");
        document.getElementById("areaNome").hidden=false;
        document.getElementById("botaoEnviar").hidden=false;
        document.getElementById("nomeSorteado").hidden=true;
    }
}

function sortearLista() {
    let listaSorteada = [];

    if (listaNomes.length < 4) {
        alert("Precisa ter pelo menos 4 nomes na lista.");
    }else{
        let tempLista = [];
        while (listaNomes.length != 0) {
            let indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
            tempLista.push(listaNomes[indiceAleatorio]);
            listaNomes.splice(indiceAleatorio, 1);
            if (tempLista.length == 2) {
                listaSorteada.push(tempLista.join(" E "));
                tempLista = [];
            }
        }
        mostrarNomes(listaSorteada);
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
    if (listaNomes.length == 0) {
        alert("Não tem nomes na lista.");
    }else {
        document.getElementById("areaNome").hidden=true;
        document.getElementById("botaoEnviar").hidden=true;
        document.getElementById("nomeSorteado").hidden=true;
        document.getElementById("botaoEditar").hidden=true;
        document.getElementById("areaEditar").hidden=true;
        document.getElementById("botaoExcluir").hidden=false;
        document.getElementById("areaExcluir").hidden=false;
    }
}

function removerNome() {
    let limpar = document.getElementById("areaExcluir");
    let nomeRemover = document.getElementById("areaExcluir").value;
    let nome = formatarNome(nomeRemover);
    if (listaNomes.includes(nome)) {
        listaNomes.pop(nome);
        mostrarNomes();
        limpar.value = "";
        telaInicial();
    } else {
        alert("Nome não está na lista");
        telaInicial();
    }
}

function editar() {
    if (listaNomes.length == 0) {
        alert("Não tem nomes na lista.");
    }else {
        document.getElementById("areaNome").hidden=true;
        document.getElementById("botaoEnviar").hidden=true;
        document.getElementById("nomeSorteado").hidden=true;
        document.getElementById("botaoExcluir").hidden=true;
        document.getElementById("areaExcluir").hidden=true;
        document.getElementById("botaoEditar").hidden=false;
        document.getElementById("areaEditar").hidden=false;
    }
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
            telaInicial();
        }
    }
}

function telaInicial(params) {
    document.getElementById("areaNome").hidden=false;
    document.getElementById("botaoEnviar").hidden=false;
    document.getElementById("nomeSorteado").hidden=true;
    document.getElementById("botaoExcluir").hidden=true;
    document.getElementById("areaExcluir").hidden=true;
    document.getElementById("botaoEditar").hidden=true;
    document.getElementById("areaEditar").hidden=true;
}

configurarEnter("areaNome", adicionarNome);
configurarEnter("areaExcluir", removerNome);
configurarEnter("areaEditar", editarNome);