var boton = document.getElementById("btn")
boton.addEventListener("click", cadena)
var contador = 0
var repetidos = []


function cadena(){
	var cadena = document.getElementById("ingresar").value.trim()
	var answer = document.getElementById("resultado").innerHTML
	var caracteres = cadena.split("")
	var identify
	var identificador = "La letra "
	var total_caracteres = caracteres.length


	for(var i = 0; i < total_caracteres; i++){

		for(var j = 0; j < total_caracteres; j++){

			if(caracteres[i] == caracteres[j]){
				contador++
			}
		}
		
		if(contador > 1 && repetidos.indexOf(caracteres[i]) == -1){
			repetidos.push(caracteres[i])
				if(identify = parseInt(repetidos)){
					identificador = "El numero "
				}
			resultado.innerHTML += (identificador +  caracteres[i] + " se repite " + contador + " veces <br>")
			}
	
		contador = 0;	
	}
	if(repetidos.length < 1){
			resultado.innerHTML = ("No se repiten caracteres")
		}
	
	console.log(repetidos)
}
