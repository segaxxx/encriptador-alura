var inputMensaje = document.querySelector("#mensaje");
var inputResultado = document.querySelector("#resultado");

var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");

var btnEscuchar = document.querySelector("#escuchar");
var btnCopiar = document.querySelector("#copiar");

var errorLetra = document.querySelector("#error-m");

var textoArea = document.querySelector(".text-area");
textoArea.value = "";
textoArea.focus();

function encriptar(){
    
    if(!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    
    document.getElementById("resultadoArea-btn").style.display = "show";
    document.getElementById("resultadoArea-btn").style.display = "inherit";
    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "inherit";
    document.getElementById("escuchar").style.display = "show";
    document.getElementById("escuchar").style.display = "inherit";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
    
    inputResultado.value = mensajeEncriptado;
}

btnEncriptar.onclick = encriptar;