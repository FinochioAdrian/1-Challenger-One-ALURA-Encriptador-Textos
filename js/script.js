


var botonEncriptar, botonDesencriptar, botonCopiar, nuevoMensaje;
botonEncriptar = document.querySelector("#btn-encriptar");
botonDesencriptar = document.querySelector("#btn-desencriptar");
botonCopiar = document.querySelector("#btn-copy");
var spanError = document.querySelector("#span-error");

function obtenerDatos() {
    let input = document.querySelector("#input-texto");
    let mesajes = input.value;

    return mesajes;
}

botonEncriptar.addEventListener("click", (event) => {
    event.preventDefault();
    nuevoMensaje = obtenerDatos();
    
    let mensajeEncriptado = encriptar(verificarMinuscula(nuevoMensaje));
    console.log(mensajeEncriptado);
    mostrarMesaje(mensajeEncriptado);

})
botonDesencriptar.addEventListener("click", (event) => {
    event.preventDefault();
    nuevoMensaje = obtenerDatos();
    verificarMinuscula(nuevoMensaje);
    let mensajeDesencriptado = desencriptar(verificarMinuscula(nuevoMensaje));
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
    return mensaje.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
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

    return mensaje.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
}

botonCopiar.addEventListener('click',  
    async function write() {
        try {
            let text = await navigator.clipboard.writeText(document.querySelector("#msg").value);
            
        } catch(error) {
            console.log(`Ocurrió un error: ${error}`);
        }
    
});


function verificarMinuscula(mensaje){
    const regexp=/[A-Z]|Ñ|á|é|í|ó|ú/g;
    if (regexp.test(mensaje)){
        
        mostrarMensajeError();
        setTimeout(ocultarMensajeError, 3000)
        
        return "";
    }
    else{
        return mensaje;
    }
}; 

function mostrarMensajeError() {


    spanError.className = "mensaje-error";


}

function ocultarMensajeError() {
    spanError.className = "hidden";
}