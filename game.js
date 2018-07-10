


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//sets the initial position of the ball
var x = canvas.width/2;
var y = canvas.height-30;

//Defining movement
var dx = 2;
var dy = -2;


function drawBall () {
    //This draws the object that we want to move
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

}

function moveBall (){
    x += dx;
    y += dy;
}


//Epicentre
function draw() {
    //Clears the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    moveBall();
}



//executes "draw()" every 10ms
setInterval(draw,10);
