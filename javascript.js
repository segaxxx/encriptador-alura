const textArea = document.querySelector("#mensaje");
const mensaje = document.querySelector("#resultado");
const textoImagen = document.querySelector("#img-mensaje");
const contenido = document.querySelector("#resultado");
const btnEscuchar = document.querySelector("#resultado");

function btnEncriptar(){
    if (validarCajaTexto(validacion.value));
    ocultarAdelante()
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptado){
    
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    document.getElementById("resultadoArea-btn").style.display = "show";
    document.getElementById("resultadoArea-btn").style.display = "inherit";

    return stringEncriptado;

}

function btnDesencriptar(){
    if (validarCajaTexto(validacion.value));
    ocultarAdelante()
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptado){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    document.getElementById("resultadoArea-btn").style.display = "show";
    document.getElementById("resultadoArea-btn").style.display = "inherit";

    return stringDesencriptado;

}

function ocultarAdelante() {
    textoImagen.classList.add("ocultar");
}

function copy(){
    contenido.select();
    document.execCommand("copy");
    mensaje.value = "";
    mensaje.focus();
}

function escuchar(){
    var mensajeEncriptado = mensaje.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}

let validacion = document.getElementById("mensaje");

function validarCajaTexto(valor) {
    if (valor === "") {
        alert("El campo no puede estar vacío");
        return false;
    }   else if (!/^[a-z]+$/.test(valor)) {
        alert("Solo se permiten letras minúsculas");
        return false;
    }
    return true;
}


