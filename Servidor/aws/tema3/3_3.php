<?php
$intColumnas = $_GET["columnas"];

for ($fila = 1; $fila <= $intColumnas; $fila++) {
    for ($columna = 1; $columna <= $fila; $columna++) {
        //if ($columna == 1 || $fila == $columna) {
            echo "* ";
        //} else {
        //    echo '&nbsp;&nbsp;';
        //}
    }
    echo "<br>";
}

for ($fila = 1; $fila < $intColumnas; $fila++) {
    for ($columna = $intColumnas; $columna >= $fila; $columna--) {
        //if ($columna == $intColumnas || $fila == $columna- 1) {
            echo "* ";
        //} else {
        //    echo '&nbsp;&nbsp;';
        //}
    }
    echo "<br>";
}


?>