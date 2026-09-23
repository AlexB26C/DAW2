<?php

$intAltura = 3;

for ($i = 1; $i <= $intAltura; $i++) {
    for ($j = 5; $j > $i; $j--) {
        echo '&nbsp;';
    }

    for ($j = 1; $j <= (2 * $i - 1); $j++) {
        echo "* ";
    }

    echo "<br>";
}
