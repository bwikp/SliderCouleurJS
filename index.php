<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="boule.css">
    <title>Document</title>
</head>

<body>
    <div id="top">
        <h1> Javascript - Réagir aux évènements</h1>
        <div>
            <input type="range" id="rouge" min="0" max="255" >
            <label for="rouge">rouge</label>
        </div>
        <div>
            <input type="range" id="vert" min="0" max="255">
            <label for="volume">vert</label>
        </div>
        <div>
            <input type="range" id="bleu" min="0" max="255">
            <label for="volume">bleu</label>
        </div>
        <div>
            <input type="range" id="mouv" step="1" min="0" max="100">
            <label for="volume">position</label>
        </div>

        <div id="valeur">
            <input type="text" id="rougeV">
            <input type="text" id="bleuV">
            <input type="text" id="vertV">
            
        </div>
    </div>
     <div id="mid">
          <div id="boule1" ></div>
          <div id="boule2" ></div>
    </div>
        <script src="boule.js"></script>
</body>

</html>