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
