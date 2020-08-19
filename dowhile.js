var contador = 0

const llueve = () => Math.random() < 0.25

do {
contador++
} while (!llueve())

//! es negar

//var redaccion = contador === 1 ? "vez" : "veces"

var redaccion = "veces"

const corregir = contador=>{
    if(contador === 1){
        redaccion = "vez";
    }
}
corregir(contador);
console.log (`Fui a ver si llovía ${contador} ${redaccion}.`)