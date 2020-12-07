const API_URL = 'https://swapi.dev/api/'
const PEOLE_URL = 'people/:id'

const opts = {
    crossDomain: true
}


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOLE_URL.replace(`:id`, id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Error porque Dios te odia. No obtuvimos a ${id}`)
}

obtenerPersonaje(1)
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
        return obtenerPersonaje(2)

    })
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
        return obtenerPersonaje(3)

    })
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
        return obtenerPersonaje(4)

    })
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
        return obtenerPersonaje(5)

    })
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
        return obtenerPersonaje(6)

    })
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
        return obtenerPersonaje(7)

    })
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
        return obtenerPersonaje(8)

    })
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
        return obtenerPersonaje(9)

    })
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
        return obtenerPersonaje(10)

    })
    .then(personaje => {
        console.log(`Hola, Padme. Soy ${personaje.name}`)
    })
    .catch(onError)