var inputMensaje = document.querySelector("#mensaje");
var inputResultado = document.querySelector("#resultado");

var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");

var btnEscuchar = document.querySelector("#escuchar");
var btnCopiar = document.querySelector("#copiar");

var errorLetra = document.querySelector("#error-m");

/*
function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}

btnCopiar.onclick = copiar;
*/

function copy(){
	var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
    inputMensaje.value = "";
    inputMensaje.focus();
}

