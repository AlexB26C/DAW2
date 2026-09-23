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

    for ($columnas = 1; $columnas <= $intFilas; $columnas++) {
        for ($espacios = $intFilas; $espacios > $columnas; $espacios--) {
            echo '&nbsp;&nbsp;';
        }

        for ($espacios = 1; $espacios <= (2 * $columnas <- 1); $espacios++) {
            echo "* ";
        }

        echo "<br>";
    }
?>
</pre>
</body>
</html>

