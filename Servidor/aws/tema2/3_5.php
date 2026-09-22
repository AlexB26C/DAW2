<?php
$intColumnas = 5;


for ($l = 1; $l <= $intColumnas-($intColumnas-2); $l++) {
    echo " ";
    for ($m = $intColumnas; $m <= $l; $m++) {
        echo "*";
    }

    echo "<br>";
}+