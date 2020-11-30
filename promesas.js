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
    console.log(`Error porque Dios te odia. No obtuvimos a ${personaje.name}`)
}

obtenerPersonaje(10)
    .then(function (personaje) {
        console.log(`Hola, Padme. Soy ${personaje.name}`)

    })
    .catch(onError)