const alumnos = ["Ana", "Bruno", "Carla", "Diego", "Elena", "Fran"];
const notas = [9.2, 4.7, 6.5, 2.3, 10, 5.0];
let arrayClasificacion = [];


for (let i= 0; i < alumnos.length; i++) {
    console.log(alumno + " tiene un " + notas[i]);
    i++

    switch (parseInt(notas[i])) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            arrayClasificacion.push(1);
            break;
        case 5:
        case 6:
            arrayClasificacion.push(2);
            break;
        case 7:
        case 8:
            arrayClasificacion.push(3);
            break;
        case 9:
        case 10:
            arrayClasificacion.push(4);
            break;
        default:
            console.log("Las notas van de 0 a 10");
    }


}

