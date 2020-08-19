console.log("Quesito bello");

var gera = {
    nombre: "Gerardo",
    apellido: "Morán",
    edad: 28,
    peso: 75
}

console.log (`Al inicio del año ${gera.nombre} pesa ${gera.peso} kg`)

const INCREMENTO_PESO = 0.300
const DIAS_DEL_AÑO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

//contador, condición, incremento
/* for(var i = 1; i <= DIAS_DEL_AÑO; i++){
    var random = Math.random()
    if (random < 0.25) {
        //aumenta de peso
        aumentarDePeso(gera)

    }else if (random < 0.5) {
        //baja de peso
        adelgazar(gera)
    }
} */

// Para FOR 
//console.log (`Al final del año ${gera.nombre} pesa ${gera.peso.toFixed(1)} kg`)

const comeMucho = () => Math.random() < 0.3
const jugarFutbol = () => Math.random() < 0.4
const META = gera.peso - 3
var dias = 0

while (gera.peso > META){
    if(comeMucho()){
        //auentar de peso
        aumentarDePeso(gera)
    }
    if(jugarFutbol()){
        //adegazar
        adelgazar(gera)
    }
    dias += 1
}

//para while
console.log(`Pasaron ${dias} días hasta que ${gera.nombre} adelgazó 3kg`)
