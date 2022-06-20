var canvas;
var ctx;

window.onload = function() {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "white" ;
    ctx.fillRect(0,0,1280,720);
}