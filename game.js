


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
    //This draws the object that we want to move
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    //update position of ball
    x += dx;
    y += dy;
}

//executes "draw()" every 10ms
setInterval(draw,10);

//sets the initial position of the ball
var x = canvas.width/2;
var y = canvas.height-30;

//Defining movement
var dx = 2;
var dy = -2;