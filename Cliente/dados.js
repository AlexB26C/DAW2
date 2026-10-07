function numeroDados (){
    return prompt("Con cuantos dados quieres jugar");
}

function numeroCaras (){
    return prompt("Cuantas caras tiene los dados");
}

function numeroRondas (){
    return prompt("Cuantas rondas quieres jugar");
}

function tirarDados (numeroCaras){
    return Math.floor(Math.random() * numeroCaras + 1);
}



function juego (numDados = 2, numCaras = 6, rondas = 5) {
    let victoriasJug1 = 0;
    let victoriasJug2 = 0;
    for (let i = 0; i < rondas; i++) {
        let resultadoJug1 = 0;
        let resultadoJug2 = 0;

        for (let j = 0; j < numDados; j++) {
            tiradaJug1 = tirarDados(numCaras);
            tiradaJug2 = tirarDados(numCaras);
            resultadoJug1 = resultadoJug1 + tiradaJug1;
            alert("Jugador 1: Has sacado un " + tiradaJug1 + " y tu resultado total de momento es " + resultadoJug1);

            resultadoJug2 = resultadoJug2 + tiradaJug2;
            alert("Jugador 2: Has sacado un " + tiradaJug2 + " y tu resultado de momento es " + resultadoJug2);
        }

        if (resultadoJug1 > resultadoJug2) {
            victoriasJug1++;
            alert("Ronda ganada por el Jugador 1\n" +
                "Rondas ganadas:\n" +
                "Jugador 1: " + victoriasJug1
                +"\nJugador 2: " + victoriasJug2);
        } else if (resultadoJug2 > resultadoJug1) {
            victoriasJug2++;
            alert("Ronda ganada por el Jugador 2\n" +
                " Rondas ganadas:\n" +
                "Jugador 1: " + victoriasJug1
                +"\nJugador 2: " + victoriasJug2);
        } else {
            alert("Empate\n" +
                "Rondas ganadas:\n" +
                "Jugador 1: " + victoriasJug1
                +"\nJugador 2: " + victoriasJug2);
        }
    }

    if (victoriasJug1 > victoriasJug2) {
        console.log("Ha ganado el jugador 1 ");
    } else if (victoriasJug1 < victoriasJug2) {
        console.log("Ha ganado el jugador 2 ");
    } else {
        console.log("Empate");
    }

}

function ejecucion () {
    juego(numeroDados(), numeroCaras(), numeroRondas());
}

ejecucion();


