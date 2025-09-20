//ejercicio 1 
const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

const {nombre, edad, direccion:{ciudad, pais}} = persona;
console.log("me llamo " + nombre + " tengo " + edad + " y vivo en " + ciudad);


//ejercicio 2
const productos = [
    {nombres: "Laptop", precio: 12000},
    {nombres: "Mouse", precio: 250},
    {nombres: "Teclado", precio: 750},
    {nombres: "Monitor", precio: 3000},
];

const nombres = productos
    .filter(productos => productos.precio > 1000 )
    .map(productos => productos.nombres);
console.log(nombres);