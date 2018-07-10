


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


//sets the initial position and size of the ball
var x = canvas.width/2;
var y = canvas.height-30;
var ballRad = 10;
//Defining Paddle and movement of paddle
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

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

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
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

function movePaddle (){
        if (rightPressed && paddleX < canvas.width-paddleWidth){
        paddleX += 7;
    }
    if (leftPressed && paddleX > 0){
        paddleX -= 7;
    }
}


//Epicentre
function draw() {
    //Clears the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //defines the ball, paddle and interactions
    drawBall();
    drawPaddle();
    collision();
    movePaddle();
    moveBall();
}






//executes "draw()" every 10ms
document.addEventListener("keydown",keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(evt){
    if(evt.keyCode == 68){
        rightPressed = true;
    } else if (evt.keyCode == 65){
        leftPressed = true;
    }
}

function keyUpHandler(evt){
    if (evt.keyCode == 68){
        rightPressed = false;
    } else if (evt.keyCode == 65){
        leftPressed = false;
    }
}

setInterval(draw,10);
