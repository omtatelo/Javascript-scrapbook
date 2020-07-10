var edad = 34

//Incremento
// edad = edad + 1

edad += 1

var peso = 75

//peso = peso - 2

peso -= 2

var sandwich = 1

peso = peso + sandwich

var elDelicioso = 3

peso -= elDelicioso

//decimales

var precioVino = 200.3
var precioVino2 = 200.3333

var total1 = precioVino2 * 3
// resultado con mil decimales

var total2 = precioVino * 100 * 3 / 100
// resultado 600.9 con un decimal. funciona si variable precio vino tiene 1 decimal

var total3 = Math.round(precioVino * 100 * 3) / 100
// funciona si hay muchos decimales en precio del vino

var totalStr = total3.toFixed(2)
// convierte cifra a 2 decimales
//lo arroja como string

//agregamos
var totalNum = parseFloat(totalStr)

var pizza = 8
var personas = 2
var cantidadPorciones = pizza / personas

