


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

//setting out the BRICK variables
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var score = 0;

//Giving BRICKS their properties
var bricks = [];
    for (var c=0; c<brickColumnCount; c++){
        bricks[c] = [];
        for (var r=0; r<brickRowCount; r++){
            bricks[c][r] = {x:0, y:0, status:1}
        }
    }



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

function bricksCollisionDectec(){
    for (var c=0; c<brickColumnCount; c++){
        for (var r=0; r<brickRowCount; r++){
            var b = bricks[c][r];
            if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y+brickHeight && b.status!==0){
                dy = -dy;
                b.status = 0;
                score++;
            }
        }
    }
}

function drawScore (){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score,8,20);
}

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

function drawBricks(){
    for (var c=0; c<brickColumnCount;c++){
        for (var r=0; r<brickRowCount;r++){
            if(bricks[c][r].status == 1){
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
        }
    }
}



function moveBall (){
    x += dx;
    y += dy;
}

function collision(){
    //if it hits the bottom or paddle
    if (y+dy+(ballRad/2) > canvas.height){    
        if(x > paddleX - ballRad/2 && x < paddleX + paddleWidth + ballRad/2){
            dy = -dy;
        } else {
        alert("Game Over");
        document.location.reload();
    }
    //if it hits the top
}   else if (y+dy-ballRad < 0){

        dy = -dy;
}
// if it hits either of the sides
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
    drawScore();
    bricksCollisionDectec();
    drawBricks();
    collision(); 
    moveBall();
    movePaddle();
}






//executes "draw()" every 10ms


setInterval(draw,10);
