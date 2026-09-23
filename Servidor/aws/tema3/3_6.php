<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<pre>
<?php
$intFilas = 10;
$numTriangulos = 4;

for ($fila = 1; $fila <= $intFilas; $fila++) {

    for ($t = 1; $t <= $numTriangulos; $t++) {

        for ($espacios = $intFilas; $espacios > $fila; $espacios--) {
            echo '&nbsp;&nbsp;';
        }

        for ($asteriscos = 1; $asteriscos <= (2 * $fila - 1); $asteriscos++) {
            echo "* ";
        }

        for ($espacios = $intFilas; $espacios > $fila; $espacios--) {
            echo '&nbsp;&nbsp;';
        }
    }
    echo "<br>";
}
?>
</pre>
</body>
</html>
<?php
