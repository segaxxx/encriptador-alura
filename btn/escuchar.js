var inputMensaje = document.querySelector("#mensaje");
var inputResultado = document.querySelector("#resultado");

var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");

var btnEscuchar = document.querySelector("#escuchar");
var btnCopiar = document.querySelector("#copiar");

var errorLetra = document.querySelector("#error-m");

function escuchar(){
    var mensajeEncriptado = inputResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}

btnEscuchar.onclick = escuchar;