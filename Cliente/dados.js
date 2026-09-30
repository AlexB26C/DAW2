function numeroDados (){
    return prompt("Con cuantos dados quieres jugar");
}

function numeroCaras (){
    let numCaras = prompt("Cuantas caras tiene los dados");
    while (numCaras < 6){
        numCaras = prompt("El numero tiene que se de 6 o mas caras");
    }

    return numCaras;
}

function numeroRondas (){
    return prompt("Cuantas rondas quieres jugar");
}

function tirarDados (numeroCaras){
    let dadoRandom = Math.floor(Math.random() * numeroCaras + 1);
    console.log("Dado tirado " + dadoRandom);
    return dadoRandom;
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
            alert("Has sacado un " + tiradaJug1 + " y tu resultado total de momento es " + resultadoJug1);

            resultadoJug2 = resultadoJug2 + tiradaJug2;
            console.log("Has sacado un " + tiradaJug2);
            console.log("Resultado Jugador 2 " + resultadoJug2);
        }
        if (resultadoJug1 > resultadoJug2) {
            victoriasJug1++;
            console.log("Victorias Jugador 1 " + victoriasJug1);
        } else if (resultadoJug2 > resultadoJug1) {
            victoriasJug2++;
            console.log("Victorias Jugador 2 " + victoriasJug2);
        } else {
            console.log("Empate");
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


