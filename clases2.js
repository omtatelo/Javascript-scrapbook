function Persona(nombre, apellido, estatura){
    //console.log("Me ejecutaron")
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
    //return this
    //no se pone porque está implícito en el objeto que se está creando
}

Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.esAlto = () => this.estatura >= 1.80


var erix = new Persona("Erix", "Rivas", 1.75 )
//new crea un nuevo objeto con el prototipo de persona

var juan = new Persona("Juan", "Agudelo", 1.80 )
var jose = new Persona("José", "Flores", 1.73 )

erix.esAlto()
juan.esAlto()
jose.esAlto()

//erix.saludar()
//juan.saludar()
//jose.saludar()