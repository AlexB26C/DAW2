function adivinaPalabra (parametros) {
    const hiddenWord = "avioneta";
    palabraAsteriscos = [];

    for (let j = 0; j < hiddenWord.length; j++) {
        if (hiddenWord.charAt(j) === parametros.charAt(j)) {
            palabraAsteriscos[j] = hiddenWord.charAt(j);
        } else {
            palabraAsteriscos[j] = "*";
        }
    }
    let palabra = palabraAsteriscos.join(' ');
    alert(palabra);
}

let palabraIntento = prompt("Dime una palabra de 8 letras: ");

adivinaPalabra(palabraIntento);