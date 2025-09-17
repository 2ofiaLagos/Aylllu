document.getElementById("entrar").addEventListener("click", function(){
let user = document.getElementById("names").value
let contraseña = document.getElementById("Contra").value

if(user == "Sofia" && contraseña == "Lagos"
){
    document.body.innerHTML ="Hola" + user
    document.body.style.color = "white"
    document.body.className= "fugaz-one-regular"
    document.body.style.fontSize = "big"
}else if(user == "Bianca" && contraseña == "Cornejo"){
    document.body.innerHTML ="Hola" + user
    document.body.style.color = "white"
    document.body.className= "fugaz-one-regular"
    document.body.style.fontSize = "big"
    }
else{
    alert("El nombre de usuario o contraseña no son válidos")
}
})

