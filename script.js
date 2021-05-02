let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}

let direcao = "right";

let comida = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = 'lightgray';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra() {
    for (i=0; i < cobra.length; i++) {
        context.fillStyle = "black";
        context.fillRect(cobra[i].x, cobra[i].y, box, box)
    }
}

function desenhaComida() {
    context.fillStyle = "red"
    context.fillRect(comida.x, comida.y, box, box)
}

document.addEventListener("keydown", update);

function update (event) {
    if (event.keyCode == 37 && direcao != "right") direcao = "left";
    if (event.keyCode == 38 && direcao != "down") direcao = "up";
    if (event.keyCode == 39 && direcao != "left") direcao = "right";
    if (event.keyCode == 40 && direcao != "up") direcao = "down";
}

function iniciarJogo(){

    if(cobra[0].x > 15 * box && direcao == "right") cobra[0].x = 0;
    if(cobra[0].x < 0 && direcao == "left") cobra[0].x = 16 * box;
    if(cobra[0].y > 15 * box && direcao == "down") cobra[0].y = 0;
    if(cobra[0].y < 0 && direcao == "up") cobra[0].y = 16 * box;


    criarBG();
    criarCobra();
    desenhaComida();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if (direcao == "right") cobraX += box;
    if (direcao == "left") cobraX -= box;
    if (direcao == "up") cobraY -= box;
    if (direcao == "down") cobraY += box;

    cobra.pop();

    let novaCabeca = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(novaCabeca);
}

let jogo = setInterval(iniciarJogo, 100);
