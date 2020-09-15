function Persona(nombre, apellido, estatura){
    //console.log("Me ejecutaron")
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
    //return this
    //no se pone porque está implícito en el objeto que se está creando
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.esAlto = function(estatura){
    if(estatura >= 1.8)
}

var sacha = new Persona("Sacha", "Lifszyc")
//new crea un nuevo objeto con el prototipo de persona

var juan = new Persona("Juan", "Agudelo")
var jose = new Persona("José", "Flores")

sacha.saludar()
juan.saludar()
jose.saludar()