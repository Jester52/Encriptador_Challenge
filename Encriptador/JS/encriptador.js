// seleccionar elementos
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptada");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
//const btnLimpiar = document.querySelector(".btn-limpiar");

// botón de encriptar
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    var texto = txtEncriptar.value;
    var txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");//reemplazar caracteres especiales
    

    if(texto == ""){
        //aviso.style.background ="#0A3871";
        aviso.style.color = "red";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto NO debe estar vacío"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.color = "red";
        aviso.style.fontWeight = "800";
        aviso.textContent = "NO debe tener acentos ni caracteres especiales"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.color = "red";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Por favor digitar TODO el texto en minuscula"

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    // Llaves de encriptación

    else{
        texto = texto.replace(/e/mg, "enter")//expresión regular
        texto = texto.replace(/i/mg, "imes")
        texto = texto.replace(/a/mg, "ai")
        texto = texto.replace(/o/mg, "over")
        texto = texto.replace(/u/mg, "ufat")

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();

    }
    
})


    // botón de desencriptar
    btnDesencriptar.addEventListener("click", e=>{
        e.preventDefault();
        var texto = txtEncriptar.value;
        var txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");//reemplazar caracteres especiales
        

        if(texto == ""){
            //aviso.style.background ="#0A3871";
            aviso.style.color = "red";
            aviso.style.fontWeight = "800";
            aviso.textContent = "El campo de texto NO debe estar vacío"

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500);
        }

        else if(texto !== txt){
            aviso.style.color = "red";
            aviso.style.fontWeight = "800";
            aviso.textContent = "NO debe tener acentos ni caracteres especiales"

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500);
        }

        else if(texto !== texto.toLowerCase()){
            aviso.style.color = "red";
            aviso.style.fontWeight = "800";
            aviso.textContent = "Por favor digitar TODO el texto en minuscula"

            setTimeout(()=>{
                aviso.removeAttribute("style");
            },1500);
        }

        // Llaves de encriptación

        else{
            texto = texto.replace(/enter/mg, "e")//expresión regular
            texto = texto.replace(/imes/mg, "i")
            texto = texto.replace(/ai/mg, "a")
            texto = texto.replace(/over/mg, "o")
            texto = texto.replace(/ufat/mg, "u")

            respuesta.innerHTML = texto;
            btnCopiar.style.visibility = "inherit";
            contenido.remove();

        }
        
    })


    // botón de copiar
    btnCopiar.addEventListener("click", e=>{
        e.preventDefault();
        var copiar = respuesta;
        copiar.select();
        document.execCommand("copy");
        swal({
            title: "¡Texto copiado con éxito!",
            icon: "success",
            button: "OK",
          });
    });