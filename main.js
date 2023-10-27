var navBar = document.getElementById('navbar');
function abrirMenu(){
    navBar.style.display = "flex"
    document.getElementById('botaoAbrir').style.display = "none"
}
function fecharMenu(){
    navBar.style.display = "none";
    document.getElementById('botaoAbrir').style.display = "block";
}
