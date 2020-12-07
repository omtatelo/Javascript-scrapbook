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

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id){
        onError(id)
    }
}

obtenerPersonajes()