function celular (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//operador new crea una instancia nueva
var celNuevo = new celular("Xiaomi", "Redmi NOte 7", 2019);
var celNuevo2 = new celular("Motorola", "Moto Z 2 Play", 2019);
var celNuevo3 = new celular("Samsung", "J7", 2019)