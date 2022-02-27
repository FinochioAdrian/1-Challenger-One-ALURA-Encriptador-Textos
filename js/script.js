


var botonEncriptar, botonDesencriptar, botonCopiar, nuevoMensaje;
botonEncriptar = document.querySelector("#btn-encriptar");
botonDesencriptar = document.querySelector("#btn-desencriptar");
botonCopiar = document.querySelector("#btn-copy");

function obtenerDatos() {
    let input = document.querySelector("#input-texto");
    let mesajes = input.value;

    return mesajes;
}

botonEncriptar.addEventListener("click", (event) => {
    event.preventDefault();
    nuevoMensaje = obtenerDatos();
    let mensajeEncriptado = encriptar(nuevoMensaje);
    console.log(mensajeEncriptado);
    mostrarMesaje(mensajeEncriptado);

})
botonDesencriptar.addEventListener("click", (event) => {
    event.preventDefault();
    nuevoMensaje = obtenerDatos();
    let mensajeDesencriptado = desencriptar(nuevoMensaje);
    console.log(mensajeDesencriptado);
    mostrarMesaje(mensajeDesencriptado);

})

function encriptar(mensaje) {
    /* Reglas de encriptación: 
    "e" es convertido para "enter" 
    "i" es convertido para "imes"
    "a" es convertido para "ai"
    "o" es convertido para "ober"
    "u" es convertido para "ufat"
    Solo letras minusculas
    No se permite acentuación de palabras 
    */
    return mensaje.replace('e', 'enter').replace('i', 'imes').replace('a', 'ai').replace('o', 'ober').replace('u', 'ufat');
}

function mostrarMesaje(mensaje) {
    let input = document.querySelector("#msg");
    input.value = mensaje;
}

function desencriptar(mensaje){

    /* Reglas de desencriptación: 
    "enter" es convertido para "e" 
    "imes" es convertido para "i"
    "ai" es convertido para "a"
    "ober" es convertido para "o"
    "ufat" es convertido para "u"
    Solo letras minusculas
    No se permite acentuación de palabras   
    */

    return mensaje.replace('enter', 'e').replace('imes', 'i').replace('ai', 'a').replace('ober', 'o').replace('ufat', 'u');
}

botonCopiar.addEventListener('click')
function copiar(){
    var copiartexto=document.querySelector("#msg");
    copiartexto.select();
    navigator.clipboard
}