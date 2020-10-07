const API_URL = 'https://swapi.dev/api/'
const PEOLE_URL = 'people/:id'



const opts = {crossDomain: true}

const onPeopleResponse = function(persona){
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOLE_URL.replace(`:id`, id)}`
    //Callback,  función que se ejecutará n el futuro.
    $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(5)




