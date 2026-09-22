/*let usuario = "usuario"
let tiempo = "1\'23\""
let raiz = "C:/"

console.log("El acceso a la ruta " + raiz + usuario + " tarda " + tiempo + ", algo demasiado \"lento\" en la actualidad")


let nombre = "Alumno"
let matricula = "bra-inf-456"
let año_esc = 2024

matricula = matricula.replace("inf", "infCom")

console.log(nombre)
console.log(matricula)
console.log(año_esc)
*/

let modulosConvalidados = parseInt(prompt('¿Cuantas asignaturas tienes convalidadas?'))
let modulosAprobados = parseInt(prompt('¿Cuantas asignaturas tienes aprobadas?'))
let modulosAprobadosTotal = modulosConvalidados + modulosAprobados

switch (modulosAprobadosTotal) {
    case 8:
        console.log('Titulas');
        break;
    case 7:
        let corruptelas = prompt('Tu profesor es Elkin')

        if (corruptelas.toLowerCase() === "si"){
            console.log('No titulas')
        } else {
            let numMiguelitos = prompt('Cuantos miguelitos estas dispuestos a comprar')
            if (numMiguelitos > 12) {
                console.log('Titulas')
            } else {
                console.log('No titulas')
            }
        }
        break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('No titulas')
        break;
    default:
        console.log('Tienen que ser una cantidad de entre 0 y 8 asignaturas')
}

