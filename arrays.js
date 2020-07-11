//Array de objetos
//filtrado por criterio de un atributo
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audífonos", costo: 1700 },
];

//filtrar
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//comprobar
articulosFiltrados


//resultado
/* (2) [{…}, {…}]
0: {nombre: "TLibro", costo: 320}
1: {nombre: "Teclado", costo: 500}
length: 2
__proto__: Array(0) */

//Mostrar un atributo de los objetos de un array
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
});

nombreArticulos
//resultado
/* (7) ["Bici", "TV", "TLibro", "Celular", "Laptop", "Teclado", "Audífonos"] */