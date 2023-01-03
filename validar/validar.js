var inputMensaje = document.querySelector("#mensaje");
var inputResultado = document.querySelector("#resultado");

var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");

var btnEscuchar = document.querySelector("#escuchar");
var btnCopiar = document.querySelector("#copiar");

var errorLetra = document.querySelector("#error-m");

function validarMensaje(){
    //borrar letras y caracteres no permitidos
    var erroresPrevios = errorLetra.querySelectorAll(".error");
    for(let err of erroresPrevios){
        errorLetra.removeChild(err);
    }
    var mensaje = inputMensaje.value;
    var letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    var mensajeError = document.createDocumentFragment();
    for(let letra of mensaje){
        if(!letrasValidas.includes(letra)){
            var p = document.createElement("p");
            p.setAttribute("class","error");
            p.textContent = alert("¡SOLO LETRAS MINUSCULAS!");
            p.textContent = mensajeEncriptado();
            mensajeError.appendChild(p);
        }
    }
    errorLetra.appendChild(mensajeError);
    if(mensajeError.children.length === 0){
        return true;
    }
    return false;
}