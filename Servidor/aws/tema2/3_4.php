<?php

$intNumeroTriangulos = $_GET["triangulos"];
$intColumnas = $_GET["columnas"];

for ($t=1;$t<=$intNumeroTriangulos;$t++) {

    for ($i = 1; $i <= $intColumnas; $i++) {
        for ($j = 1; $j <= $i; $j++) {
            echo "* ";
        }
        echo "<br>";
    }

    for ($j = 1; $j <= $intColumnas; $j++) {
        for ($k = $intColumnas; $k - 1 >= $j; $k--) {
            echo "* ";
        }
        echo "<br>";
    }
}