//ESTA ES LA BUENA
//-----------------------------------------

//Database nombres 
var soprani = ["Anna Netrebko","Renée Fleming", "Diana Damrau", "Natalie Dessay", "María Katzarava", "Liliana Aguilasocho", "Anabel de la Mora", "Lourdes Ambriz", "Ainhoa Arteta", "Andrea Cortés", "Liliana del Conde"];
//Database de roles
var rolesSoprano = ["Adina", "Violetta", "La Contessa", "Gilda", "Adele", "Mimí", "Zerlina", "Susanna","Musetta","Marguerite", "Manon"]

for(var name of soprani){
    function cantante (name, tesitura, rol) {
        this.name = name;
        this.tesitura = tesitura;
        this.rol = rol;
    }
    var getRolSoprano = function () {
        var i = Math.floor(Math.random() * rolesSoprano.length);
        return rolesSoprano[i];
    }
    var cantanteNueva = new cantante (name, "soprano", getRolSoprano());
    console.log(cantanteNueva);   
}
//-----------------------------------------

//ESTA ES LA BUENA
//-----------------------------------------

//Database
var soprani = ["Anna Netrebko","Renée Fleming", "Diana Damrau", "Natalie Dessay", "María Katzarava", "Liliana Aguilasocho", "Anabel de la Mora", "Lourdes Ambriz", "Ainhoa Arteta", "Andrea Cortés", "Liliana del Conde"];
var rolesSoprano = ["Adina", "Violetta", "La Contessa", "Gilda", "Adele", "Mimí", "Zerlina", "Susanna","Musetta","Marguerite", "Manon"]
var pianistas = ["James Demster", "Ángel Rodríguez"]

for(var name of soprani){
    function cantante (name, tesitura, rol, pianista) {
        this.name = name;
        this.tesitura = tesitura;
        this.rol = rol;
        this.pianista = pianista;
    }
    var getRolSoprano = function () {
        var i = Math.floor(Math.random() * rolesSoprano.length);
        return rolesSoprano[i];
    }
    var getPianista = function () {
        var i = Math.floor(Math.random() * pianistas.length);
        return pianistas[i];
    }
    var cantanteNueva = new cantante (name, "soprano", getRolSoprano(), getPianista());
    console.log(cantanteNueva);   
}
//-----------------------------------------


//Database de cantantes de opera
var tenori = ["Rolando Villazón", "Javier Camarena", "Juan Diego Flores", "Arturo Chacón", "Jonas Kaufmann", "Piotr Beczala"];
var rolesTenor = ["Don Ottavio", "Alfredo", "Nemorino"]

//Database Tesituras
var tesitura1= "Soprano";
var tesitura2 = "Tenor";

//______________
//función crear objeto
var soprani = ["Anna Netrebko","Renée Fleming", "Diana Damrau", "Natalie Dessay", "María Katzarava", "Liliana Aguilasocho"];

function cantante (name/* , tesitura, rol */) {
    this.name = name;
    //this.tesitura = tesitura;
    //this.rol = rol;
}


for(var name of soprani){
    
    var cantanteNueva = new cantante ("name");
    cantante(name);
       
}
//resulta en un nombre guardado al azar
//______________



//-----------------------------------------
//función crear objeto 2 EXITOSO, saca 
var soprani = ["Anna Netrebko","Renée Fleming", "Diana Damrau", "Natalie Dessay", "María Katzarava", "Liliana Aguilasocho"];

for(var name of soprani){
    function cantante (name/* , tesitura, rol */) {
        this.name = name;
        //this.tesitura = tesitura;
        //this.rol = rol;
    }
    var cantanteNueva = new cantante (name);
    //cantante(name);
    console.log(cantanteNueva);   
}
//-----------------------------------------


//función crear objeto 3 
var soprani = ["Anna Netrebko","Renée Fleming", "Diana Damrau", "Natalie Dessay", "María Katzarava", "Liliana Aguilasocho"];

for(var name of soprani){
    function cantante (name, tesitura/* , rol */) {
        this.name = name;
        this.tesitura = tesitura;
        //this.rol = rol;
    }
    var cantanteNueva = new cantante (name, "soprano");
    console.log(cantanteNueva);   
}
//-----------------------------------------





//función para Asignar un rol aleatoriamente


console.log(getRolSoprano());
//NO TOCAR ------------------------------------------------



//función Ana netrebko
/* var soprani = ["Anna Netrebko","Renée Fleming", "Diana Damrau", "Natalie Dessay", "María Katzarava", "Liliana Aguilasocho" ];
var getSopranoName = function () {
    var sopranoName = soprani[0];
    return sopranoName;
}
console.log(getSopranoName()); */

//saludar cantantes
var soprani = ["Anna Netrebko","Renée Fleming", "Diana Damrau", "Natalie Dessay", "María Katzarava", "Liliana Aguilasocho" ];

function getSopranoName(name){
    console.log(`Hola, ${name}`);
}

for(var name of soprani){
    getSopranoName(name);
    
}



/* 
Código que jala pero no querían que usara
soprani.forEach(funcionPrueba);
function funcionPrueba(doh) {
    console.log(doh)
} */



//NO TOCAR ------------------------------------------------
//Database de Roles por tesitura
var rolesSoprano = ["Adina", "Violetta", "La Contessa", "Gilda"]
//función para Asignar un rol aleatoriamente
var getRolSoprano = function () {
    var i = Math.floor(Math.random() * rolesSoprano.length);
    //Math.floor(Math.random() * rolesSoprano.length); genera index random para el array
    //https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
    return rolesSoprano[i];
}

console.log(getRolSoprano());
//NO TOCAR ------------------------------------------------


