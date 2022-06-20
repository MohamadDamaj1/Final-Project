var canvas;
var ctx;

var upKey;
var rightKey;
var downKey;
var leftkey;

var gameloop;
var player;

window.onload = function() {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    setupInputs();
    player = new Player(100, 400);
    gameLoop = setInterval(step, 1000/30);
   
}

function step() {
    player.step();

    draw();
}

function draw() {
    ctx.fillStyle = "white" ;
    ctx.fillRect(0,0,1280,720);
    player.draw();
}

function setupInputs() {
    document.addEventListener("keydown", function(event) {
      if (event.key === "w" || event.key === "ArrowUp") {
        upKey = true;
      }
    });
}