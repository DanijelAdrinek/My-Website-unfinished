<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/index.css">
    <title>Learnings</title>
</head>
<body>

<?php
    require './assets/connection.php';
    require './assets/header.php';

    // $query = "SELECT * FROM learnings";

    // $result = $conn->query($query);

    // while($row = $result->fetch_assoc()){
    //     $type = $row['type'];
    //     $title = $row['title'];
    //     $date = $row['date'];
    //     $text = $row['text'];
    //     $img = $row['img'];
    //     $link = $row['link'];

    //     ?>

        

           <?php

    // }

?>

<div class="container">

        <div id="1" class="card">
            <h1>Hacking</h1>
            <p></p>
            <img src="" alt="">
        </div>
        <div id="2" class="card">
            <h1>Robotics</h1>
            <p></p>
            <img src="" alt="">
        </div>
        <div id="3" class="card">
            <h1>Coding</h1>
            <p></p>
            <img src="" alt="">
        </div>

</div>

</body>
</html>