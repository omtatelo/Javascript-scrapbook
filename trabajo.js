var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

//.pop elimina el último
var sacarUltimo = frutas.pop("Uvas");

//.unshift agrega elementos al principio
var nuevaLongitud = frutas.unshift("Piña");

//.shift elimina el elemento al inicio
var borrarFrutaInicial = frutas.shift("Piña")
//TIENE QUÉ COINCIDIR EL ELEMENTO CON LA POSICIÓN

//.indexOf Para saber en qué posición está el elemento
var posición = frutas.indexOf("Cereza");