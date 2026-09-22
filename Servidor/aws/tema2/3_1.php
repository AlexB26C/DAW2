<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="3_1Prueba.php" method="get">

    <div>
        <label for="dia">Dia</label>
        <select id="dia" name="dia">
            <?php
            echo '<option value="0">Dia</option>';
                for ($i=1;$i<=31;$i++) {
                    echo "<option value=$i>$i</option>";
                }
            ?>
        </select>
    </div>

    <div>
        <label for="mes">Mes</label>
        <select id="mes" name="mes">
            <?php
                echo '<option value="0">Mes</option>';
                for ($i=1;$i<=12;$i++) {
                    echo "<option value=$i>$i</option>";
                }
            ?>
        </select>
    </div>

    <div>
        <label for="anio">Año</label>
        <select id="anio" name="anio">
            <?php
                echo '<option value="0">Año</option>';
                for ($i=1990;$i<=2026;$i++) {
                    echo "<option value=$i>$i</option>";
                }
            ?>
        </select>
    </div>

    <button type="submit">Enviar</button>
</form>
</body>
</html>
