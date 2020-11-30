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


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOLE_URL.replace(`:id`, id)}`
        $
        .get(url, opts, function(data){
            resolve(data)
        })
        .fail(()  => reject(id))
    })
}
    
function  onError(id) {
    console.log(`Error porque Dios te odia. No obtuvimos a ${personaje.name}`)
}

obtenerPersonaje(10)
.then(function(personaje){
    console.log(`Hola, Padme. Soy ${personaje.name}`)

})
.catch(onError)