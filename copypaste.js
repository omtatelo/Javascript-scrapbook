//Machotes
var miCelular = {
    marca: "xiaomi",
    modelo: "Redmi Note 7",
    annio: 2019,
    detalleCel: function(){
        console.log(`Cel ${this.marca} ${this.modelo}`);
        }
	}

//función constructiva
function celular (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//operador new crea una instancia nueva
var celNuevo = new celular("Xiaomi", "Redmi NOte 7", 2019);
var celNuevo2 = new celular("Motorola", "Moto Z 2 Play", 2019);
var celNuevo3 = new celular("Samsung", "J7", 2019)


//loops
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

//for ... of
for(var gato of gatos){
    saludarGatos(gato);
}

//while
while(gatos.length > 0){
    console.log(gatos)
    var gato = gatos.shift();
    //shift es un método que saca elementos del arra
    saludarGatos(gato);
}