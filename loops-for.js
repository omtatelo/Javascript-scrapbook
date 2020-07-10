var gatos = ["Cecilio", "Gatósfera", "Blanquita", "Zarastra"];

function saludarGatos(gato){
    console.log(`Hola, ${gato}`);
}

//loop for
for(var i = 0; i < gatos.length; i++){
    //la variable i es por uso y costumbre: index.
    //mientras la variable i sea menor que la longitud completa del array de gatos, entonces se aumentará por 1
    saludarGatos(gatos[i]);
}

//siguiente forma
for(var gato of gatos){
    saludarGatos(gato);
}