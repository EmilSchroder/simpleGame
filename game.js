


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


//sets the initial position and size of the ball
var x = canvas.width/2;
var y = canvas.height-30;
var ballRad = 10;

//Defining movement
var dx = 2;
var dy = -2;


function drawBall () {
    //This draws the object that we want to move
    ctx.beginPath();
    ctx.arc(x,y,ballRad,0,Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

}

function moveBall (){
    x += dx;
    y += dy;
}

function collision(){
        if (y+dy+ballRad > canvas.height || y+dy-ballRad < 0){
    dy = -dy;
}

if (x+dx-ballRad < 0 || x+dx+ballRad > canvas.width){
    dx = -dx;
}
}


//Epicentre
function draw() {
    //Clears the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //defines the ball and interactions
    drawBall();
    collision();
    moveBall();
   

}






//executes "draw()" every 10ms
setInterval(draw,10);
