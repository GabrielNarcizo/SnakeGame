let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0] = {
    x: 8 * box,
    y: 8 * box
}

let direcao = "right";

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

function iniciarJogo(){
    criarBG();
    criarCobra();

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
