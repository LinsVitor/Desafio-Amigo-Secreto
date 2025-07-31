let listaNomes = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    
    if (listaNomes.includes(nome)){
        alert("Nome já existe na lista");
    }else if (nome === "") {
        alert("Por favor insira um nome.");
    }else{
        listaNomes.push(nome);
        mostrarNome();
        limparTexto();
    }
}

function mostrarNome() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (nome of listaNomes) { // Alterado o for...in pelo for...of, for...in retorna o valor do índice.
        let novaLista = document.createElement("li")
        novaLista.textContent = nome;
        lista.appendChild(novaLista);
    }
}

function sortearAmigo() {
    let resultado = Math.floor(Math.random() * listaNomes.length);
    console.log(resultado);
    let texto = document.getElementById("resultado");
    texto.innerHTML = listaNomes[resultado];
}

function limparTexto() {
    let nome = document.getElementById("amigo");
    nome.value = "";
}