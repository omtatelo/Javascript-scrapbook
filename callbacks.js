//Para usarse cuando el js se ejecute en un html
//var script = document.createElement('script');
//script.src = '//code.jquery.com/jquery-3.5.1.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);

//hacer un pedo con node y luego poner esto
//import * as jquery from 'code.jquery.com/jquery-3.5.1.min.js';

const API_URL = 'https://swapi.dev/api/'
const PEOLE_URL = 'people/:id'

const opts = {
    crossDomain: true
}


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOLE_URL.replace(`:id`, id)}`
    //Callback,  función que se ejecutará n el futuro.

    $
        .get(url, opts, callback)
        .fail(function () {

        console.log(`Error porque Dios te odia`)
    })
}


//Hacer los callbacks en orden
obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(5, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)
        obtenerPersonaje(10, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(14, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(11, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)
                    
                    obtenerPersonaje(4, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(3, function (personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)

                            obtenerPersonaje(13, function (personaje) {
                                console.log(`Hola, yo soy ${personaje.name}`)
                            })
                        })
                    })
                })
            })
        })
    })
})