function numeroCaras() {
  const caras = parseInt(prompt("¿Cuántas caras tienen tus dados?"));

  return caras >= 2 ? caras : 6;
}

function numeroDados() {
  const dados = parseInt(prompt("¿Cuántos dados quieres?"));

  return dados >= 1 ? dados : 2;
}

function numeroRondas() {
  const rondas = parseInt(prompt("¿Cuántas rondas quieres?"));

  return rondas >= 1 ? rondas : 5;
}

function numeroJugadores(){
  const jugadores = parseInt(prompt("¿Cuántos jugadores sois?"));

  return jugadores >= 2 ? jugadores : 2;
}

function inicializarPartida() {
  return {
    caras: numeroCaras(),
    dados: numeroDados(),
    rondas: numeroRondas(),
    jugadores: numeroJugadores()
  };
}

function tirarDados(caras, dados) {
  let resultadoTotal = 0;

  for (let i = 0; i < dados; i++) {
    const tirada = Math.floor(Math.random() * caras) + 1;


    console.log(`Tirada número ${i + 1}: ${tirada}`);

    resultadoTotal += tirada;
  }

  console.log(`Resultado total: ${resultadoTotal}`);

  return resultadoTotal;
}

function jugarRonda(caras, dados,jugadores) {
  let jugador = [];
  let ganadorTemporal = [];
  let indice = 0;

  for (let i = 0; i < jugadores; i++) {
    jugador[i] = tirarDados(caras, dados);
    if (jugador[i] === ganadorTemporal) {
      indice = -1
    } else if (jugador[i] > ganadorTemporal) {
      ganadorTemporal = jugador[i];
      indice = i;
    }
  }
  if (indice === -1) {
    console.log("Empate")
    return indice
  } else {
    console.log("Victoria jugador " + (indice + 1));
    return indice;
  }
}

function ganador(victorias) {
  let victoriasGanador = victorias[0];
  for (let i = 0; i < victorias.length; i++) {
    if (victorias[i] > victoriasGanador) {
      victoriasGanador = i;
    }
  }

  if (victoriasGanador === 0) {
    console.log("Empate")
  } else {
    console.log("Ganador jugador " + victoriasGanador);
  }

}

function miPartida() {
  const partida = inicializarPartida();

  let victorias = [0]

  for (let i = 0; i < partida.rondas; i++) {
    console.log(`\n--- Ronda ${i + 1} ---`);

    let indice = jugarRonda(partida.caras, partida.dados, partida.jugadores);

    victorias[indice] += 1;
  }

  ganador(victorias);
  return true;
}

miPartida();
