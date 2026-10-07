function adivinaPalabra (palabraIntento) {
    const hiddenWord = "avioneta";
    palabraIntento.toLowerCase();
    palabraAsteriscos = []
    console.log("Adivina la palabra");
    //while (palabraIntento !== hiddenWord) {
        for (let j = 0; j < hiddenWord.length; j++) {
            if (hiddenWord.charAt(j) === palabraIntento.charAt(j)) {
                palabraAsteriscos[j] = hiddenWord.charAt(j);
            } else {
                palabraAsteriscos[j] = "*";
            }
        }
        console.log(palabraAsteriscos);
    //}
}

adivinaPalabra('aguacate');