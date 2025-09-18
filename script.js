document.getElementById("Enviar").addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
let edad   = document.getElementById("Edad").value;
let pais   = document.getElementById("país").value;
let genero = document.getElementById("género").value;
let nombreUsuario = document.getElementById("nombreUsuario").value;
let password = document.getElementById("password").value;
let correo = document.getElementById("correo").value;
let confirmarcorreo = document.getElementById("confirmarcorreo").value;



var regex = /^[a-zA-Z0-9]{8,}$/
if (regex.test(nombreUsuario)){
    //alert("El nombre de usuario es válido")
    
    document.getElementById("p").innerHTML =  "El nombre de usuario es válido"
    document.getElementById("p").style.color = "green"
    document.getElementById("nombreUsuario").style.color = "green"
}
else{
    document.getElementById("p").innerHTML = "El nombre de usuario es inválido (mín. 8 carácteres, mayúsculas, minúsculas, números)"
    document.getElementById("p").style.color = "red"
    document.getElementById("nombreUsuario").style.color = "red"
}
if (regex.test(password)){
    //alert("El nombre de usuario es válido")
    
    document.getElementById("hi").innerHTML =  "La contraseña es válida"
    document.getElementById("hi").style.color = "green"
    document.getElementById("password").style.color = "green"
}
else{
    document.getElementById("hi").innerHTML = "La contraseña es inválida (mín. 8 carácteres, mayúsculas, minúsculas, números)"
    document.getElementById("hi").style.color = "red"
    document.getElementById("password").style.color = "red"
}

if (edad > 0 && edad < 14){
    alert("No tienes la edad adecuada para acceder a estos cursos")
} else if (edad< 1)
    alert("Ingrese una edad válida")



if (correo === confirmarcorreo){
    document.getElementById("hola").innerHTML = "Los correos coinciden"
    document.getElementById("hola").style.color = "green"
}
else {
    document.getElementById("hola").innerHTML = "Los correos no coinciden"
    document.getElementById("hola").style.color = "red"
}


var regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
if (regex.test(correo)){
    document.getElementById("lp").innerHTML =  "El correo es válido"
    document.getElementById("lp").style.color = "green"
    document.getElementById("correo").style.color = "green"
} else {
    document.getElementById("lp").innerHTML =  "El correo es inválido"
    document.getElementById("lp").style.color = "red"
    document.getElementById("correo").style.color = "red"
    }

})
