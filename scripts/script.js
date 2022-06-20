var canvas;
var ctx;

var upKey;
var rightKey;
var downKey;
var leftkey;

var gameloop;
var player;
var borders = [];

window.onload = function() {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    setupInputs();
    player = new Player(100, 400);
    for (let i = 0; i < 6; i++) {
        borders.push(new Border(0 + 100* i, 620, 100, 100, 1));
    }
    gameloop = setInterval(step, 1000/30);
   
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
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        leftkey = true;
      }

      else if (event.key === "s" || event.key === "ArrowDown") {
        downKey = true;
      }
      else if (event.key === "d" || event.key === "ArrowRight") {
        rightKey = true;
      }

    });
}
document.addEventListener("keyup", function(event) {
    if (event.key === "w" || event.key === "ArrowUp") {
      upKey = false;
    } else if (event.key === "a" || event.key === "ArrowLeft") {
      leftkey = false;
    }

    else if (event.key === "s" || event.key === "ArrowDown") {
      downKey = false;
    }
    else if (event.key === "d" || event.key === "ArrowRight") {
      rightKey = false;
    }

  });
