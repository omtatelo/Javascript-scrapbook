var gerardo ={
    nombre: "Gerardo",
    apellido: "Morán",
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    pianista: false,
    futbol: true
}
function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero){
        console.log("Ingeniero")
    } else{
        console.log("No es ingeniero")
    }
    if (persona.cocinero){
        console.log("cocinero")
    }
    if (persona.cantante){
        console.log("cantante")
    }
    if (persona.dj){
        console.log("DJ")
    }
    if (persona.pianista){
        console.log("pianista")
    }
    if (persona.futbol){
        console.log("aficionado al futbol")
    }
}

imprimirProfesiones(gerardo);

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad >17){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es un morrillo.`)
    }
}
imprimirSiEsMayorDeEdad(gerardo);