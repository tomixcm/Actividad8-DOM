const revisar = document.getElementById("btn-revisar"); 
const enviar = document.getElementById("btn-enviar"); 
const opcion1 = document.getElementById("opcion1"); 
const opcion2 = document.getElementById("opcion2"); 
const mensaje = document.getElementById("mensaje"); 
 
revisar.onclick = function() { 
 
    const seleccionado = opcion1.checked || opcion2.checked; 
 
    enviar.disabled = seleccionado ? false : true; 
 
    mensaje.textContent = seleccionado 
        ? "Puedes enviar la información." 
        : "Debes seleccionar al menos una opción."; 
};

enviar.onclick = function() {
    mensaje.textContent = "Encuesta terminada";
};