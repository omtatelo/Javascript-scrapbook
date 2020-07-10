var gatos = ["Cecilio", "Gatósfera", "Blanquita", "Zarastra"];

function saludarGatos(gato){
    console.log(`Hola, ${gato}`);
}

//mientras lo que esté entre paréntesis sea verdad, ocurre la función
while(gatos.length > 0){
    console.log(gatos)
    var gato = gatos.shift();
    //shift es un método que saca elementos del arra
    saludarGatos(gato);
}