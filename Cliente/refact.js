const equipos = [
    equipos1 = ["Barcelona", 94, 38, 31, 1, 6, 95, 36],
    equipos2 = ["Real Madrid", 86, 38, 27, 5, 6, 77, 35],
    equipos3 = ["Villarreal", 72, 38, 22, 6, 10, 72, 46],
    equipos4 = ["Atleti", 69, 38, 21, 6, 11, 62, 44],
    equipos5 = ["Betis", 60, 38, 15, 15, 8, 59, 48],
    equipos6 = ["Celta", 54, 38, 14, 12, 12, 53, 48],
    equipos7 = ["Getafe", 51, 38, 15, 6, 17, 32, 38],
    equipos8 = ["Rayo", 50, 38, 12, 14, 12, 41, 44],
    equipos9 = ["Valencia", 49, 38, 13, 10, 15, 46, 55],
    equipos10 = ["R. Sociedad", 46, 38, 11, 13, 14, 59, 61]
]

function mostrarDatos() {
    for (let equipo of equipos) {
        console.log("Nombre: " + equipo[0] + " Puntos: " + equipo[1] + " PJ: " + equipo[2] + " PG: " + equipo[3] + " PE: " + equipo[4] + " PP: " + equipo[5] + " GF: " + equipo[6] + " GC: " + equipo[7]);
    }
}

function calcularMediaGoles() {
    let mediaGoles = 0;
    for (let equipo of equipos) {
        mediaGoles = mediaGoles + equipo[6];
    }
    mediaGoles = mediaGoles/equipos.length;

    return mediaGoles;
}

function equiposSuperanMedia () {
    let mediaGoles = calcularMediaGoles();
    for (let equipo of equipos) {
        if (equipo[6] > mediaGoles) {
            console.log(equipo);
        }
    }
}

//Zona de ejecucion de funciones
mostrarDatos();
console.log("\nHan superado la media de " + calcularMediaGoles() + " goles");
equiposSuperanMedia();

