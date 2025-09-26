import {restar} from './utils.js';

console.log(restar(9,5));
console.log(restar(8,5));
console.log(restar(11,5));
console.log(restar(9,6));
console.log(restar(12,555));
console.log(restar(40000,569));
console.log(restar(91234,55649));


// ejercicio 2
function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
        if(usuario === "admin"){

            resolve("Acceso concedido");
        }else{
            reject("Acceso Denegado");
        }
    });

}

verificarUsuario("admin")
    .then(res => console.log(res)) //acceso concedido
    .catch(err =>  console.error(err));

verificarUsuario("Ivan")
    .then(res => console.log(res)) 
    .catch(err =>  console.error(err));//acceso denegado

//ejercicio 3

function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000); 
    });
}

async function ObtenerDatos() {
    try {
    const resultado = await simularPeticionAPI()
    console.log(resultado)
    } catch (error) {
        console.error("Error al tratar de obtener los datos")
    }
}
    ObtenerDatos();
