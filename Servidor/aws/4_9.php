<?php
    $tamanio = 10;
    $tablero = [];

    for ($i = 0; $i < $tamanio; $i++){
        for ($j = 0; $j < $tamanio; $j++){
                $tablero[$i][$j] = false;
        }
    }

    if (isset($_GET['enviar'])) {

        for ($i = 0; $i < $tamanio; $i++) {
            for ($j = 0; $j < $tamanio; $j++) {
                if (isset($_GET['tablero'][$i][$j])){
                    $tablero[$i][$j] = true;
                }
            }
        }

        $nuevoTablero = [];
        for ($i = 0; $i < $tamanio; $i++) {
            for ($j = 0; $j < $tamanio; $j++) {
                $nuevoTablero[$i][$j] = false;
            }
        }

        $filaDestino = $tamanio - 1;

        for ($i = $tamanio - 1 ; $i >= 0; $i--) {
            $casillasMarcadas = 0;
            for ($j = 0; $j < $tamanio; $j++) {
                if ($tablero[$i][$j] === true) {
                    $casillasMarcadas++;
                }
            }

            if ($casillasMarcadas < $tamanio) {
                for ($j = 0; $j < $tamanio; $j++) {
                    $nuevoTablero[$filaDestino][$j] = $tablero[$i][$j];
                }
                $filaDestino--;
            }
        }
    }
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="" method="get">
<table>
<?php
    for ($i = 0; $i < $tamanio; $i++) {
        echo "<tr>";
        for ($j = 0; $j < $tamanio; $j++) {
            $marcadoUsuario = $tablero[$i][$j] ? 'checked' : '';
            echo "<td><input type='checkbox' name='tablero[$i][$j]' $marcadoUsuario></td>";
        }
        echo "</tr>";
    }
?>
</table>
<button type="submit" name="enviar">Enviar</button>
</form>
<hr>

<h3>2. Tablero con Cambios (Resultado)</h3>
<table>
<?php
if (isset($nuevoTablero)) {
    for ($i = 0; $i < $tamanio; $i++){
        echo "<tr>";
            for ($j = 0; $j < $tamanio; $j++){
                $marcado = $nuevoTablero[$i][$j] ? 'checked' : '' ;
                echo "<td><input type='checkbox' $marcado disabled></td>";
            }
        echo "</tr>";
    }
}
?>
</table>

</body>
</html>
