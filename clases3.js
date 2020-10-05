//ECMAScript 2015
class Persona {
    constructor(nombre, apellido, estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
    }
    
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}.`)
        if(fn){
            fn(nombre)
        }
    }

    esAlto(){
        if(this.estatura >= 1.80){
            console.log(`Soy ${this.nombre} y soy alto.`)
        }else{
            console.log(`Soy ${this.nombre} y no soy tan alto.`)
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, estatura){
        super(nombre, apellido, estatura)
   }
   saludar(fn){
       //var nombre = this.nombre
       //var apellido = this.apellido
       var {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if(fn){
        fn(this.nombre, true)
    }
    
   }
}

function responderSaludo(nombre, esDev){
    console.log(`Hola, ${nombre}.`)
    if (esDev){
        console.log(`Wow, los desarrolladores son sexys...`)
    }
}

//new crea un nuevo objeto con el prototipo de persona
var erix = new Persona("Erix", "Rivas", 1.75 )
var shel = new Persona("Shel", "Valdés", 1.60)
var juan = new Desarrollador("Juan", "Agudelo", 1.80 )
var jose = new Desarrollador("José", "Flores", 1.73 )

//erix.esAlto()
//juan.esAlto()
//jose.esAlto()

erix.saludar()
shel.saludar(responderSaludo)
juan.saludar(responderSaludo)
jose.saludar()
