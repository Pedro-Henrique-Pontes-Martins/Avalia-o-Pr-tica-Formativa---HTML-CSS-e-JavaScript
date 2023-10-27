var navBar = document.getElementById('navbar');
var botao1 = document.getElementById('botaoAbrir');
var botao2 = document.getElementById('botaoFechar');
function abrirMenu(){
    navBar.style.display = "flex"
    document.getElementById('botaoAbrir').style.display = "none"
}
function fecharMenu(){
    navBar.style.display = "none";
    document.getElementById('botaoAbrir').style.display = "block";
}
