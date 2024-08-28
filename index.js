const btnEncriptar = document.querySelector(".btn-encriptador");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector (".evaluar") 
const contenido = document.querySelector(".tarjeta-contenedor")

btnEncriptador.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]><:"`;,\u0300-\u036f']/g, "");
    console.log(txt);

    if (texto === "") {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else if (texto !== txt.toLowerCase()) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    } else {
        texto = texto.replace(/e/gi, "enter");
        texto = texto.replace(/i/gi, "imes");
        texto = texto.replace(/a/gi, "ai");
        texto = texto.replace(/o/gi, "ober");
        texto = texto.replace(/u/gi, "ufat");
    }

    respuesta.innerHTML = texto;
    contenido.remove();
});
