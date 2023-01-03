var inputMensaje = document.querySelector("#mensaje");
var inputResultado = document.querySelector("#resultado");

var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");

var btnEscuchar = document.querySelector("#escuchar");
var btnCopiar = document.querySelector("#copiar");

var errorLetra = document.querySelector("#error-m");

function desencriptar(){
    
    if(!validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    
    document.getElementById("resultadoArea-btn").style.display = "show";
    document.getElementById("resultadoArea-btn").style.display = "inherit";
    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "inherit";
    document.getElementById("escuchar").style.display = "show";
    document.getElementById("escuchar").style.display = "inherit";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
    inputResultado.value = mensaje;
}

btnDesencriptar.onclick = desencriptar;