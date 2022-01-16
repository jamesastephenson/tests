<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Info Extract - PHP</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="result">
            <h1>Results</h1>

            <?php
                $name = $_POST['name'];
                $username = $_POST['username'];

                print "<h2>Name: ".$name;
                print "<br>Username: ".$username."</h2>";
            ?>
        </div>
    </div>
</body>
</html>