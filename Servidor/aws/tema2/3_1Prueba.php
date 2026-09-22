<html>
    <head></head>
    <body>
        <?php
         $strDia = $_GET["dia"] ?: 'Indefinido';
         $strMes = $_GET["mes"] ?: 'Indefinido';
         $strAnio = $_GET["anio"] ?: 'Indefinido';

         echo "Dia $strDia, Mes $strMes, Anio $strAnio";
         ?>
    </body>
</html>