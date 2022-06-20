var canvas;
var ctx;

var gameloop;
var player;

window.onload = function() {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    player = new player(100, 400);
    ctx.fillStyle = "white" ;
    ctx.fillRect(0,0,1280,720);
}