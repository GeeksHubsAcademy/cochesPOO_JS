
class Coche {

    constructor(velocidad, peso, color, rueda_size, motor, nombre, marca, cambio, longitud, puertas){

        this.velocidad = velocidad;
        this.peso = peso;
        this.color = color;
        this.rueda_size = rueda_size;
        this.motor = motor;
        this.nombre = nombre;
        this.marca = marca;
        this.cambio = cambio;
        this.longitud = longitud;
        this.puertas = puertas;
        

        this.metros = 0;
        this.ruedas = 5;

    }

    acelerar(){

        this.metros += parseInt(((this.velocidad / this.peso ) * (Math.random() * 100)));  

    }

    frenar(){

    }


}


//Instanciación de la clase coche para crear o generar objetos en nuestra app.

let coche1 = new Coche(210, 1500, "Negro", 2055516, "Diesel", "A3", "Audi", true, 4, 5);
let coche2 = new Coche(200, 1000, "Negro", 2055516, "Diesel", "Golf", "VolksWagen", true, 3, 5);
let coche3 = new Coche(260, 1200, "Negro", 2055516, "Gasolina", "Enzo", "Ferrari", true, 4, 3);
let coche4 = new Coche(205, 1400, "Blanco", 2055516, "Gasolina", "AMG", "Mercedes", true, 4, 3);

//Diccionario de JS

let coches = {
    "coche1" : coche1,
    "coche2" : coche2,
    "coche3" : coche3,
    "coche4" : coche4
}



const acelerarCoche = (valor) => {

    coches[valor].acelerar()

    document.getElementById(valor).innerHTML = `Los metros recorridos son : ${coches[valor].metros}`;

}