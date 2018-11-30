/*
    Final Project MMP210
*/

var playerScores = 0;
var AIScores = 0;
var player;
var ball;
var ai;

var dots = [];
var dSize = 10;
var txtSize = 30;

//var BC = ; // Ball Collided
//var BS = ; // Ball Sound
//var BM = ; // Background Music
//var PS = ; // Paddle Sound



function preload() {
     //= loadSound("");
     //= loadSound("");
     // music = loadSound("music.mp3");
    
}

function setup() {
    createCanvas(800, 500);


    player = new player();
    ai = new AI();
    ball = new Ball();

    for (let y = dSize / 2; y < height; y += dSize * 2) {
        dots.push(createVector(width / 2 - dSize / 2, y));
    }
}

function draw() {
    background(0);

    noStroke();
    fill(255, 100);
    drawSquare();

    ball.update();
    ball.show();

    player.update();
    player.show();

    ai.update();
    ai.show();

    if (ball.pos.x > player.pos.x && ball.pos.x < player.pos.x + player.w &&
        ball.pos.y > player.pos.y && ball.pos.y < player.pos.y + player.h) {
        ball.acc.x *= -1;
    }

    if (ball.pos.x > ai.pos.x && ball.pos.x < ai.pos.x + ai.w &&
        ball.pos.y > ai.pos.y && ball.pos.y < ai.pos.y + ai.h) {
        ball.acc.x *= -1;
    }
    if (ball.pos.x > width - ball.r) {
        //ball.acc.x *= -1;
        playerScores++;
        ball = new Ball();
    
        
    }
    if (ball.pos.x < 0) {
        //ball.acc.x *= -1;
        AIScores++;
        ball = new Ball();
        
    }

    if (ball.acc.x > 0) {
        var dX = ai.pos.x - ball.pos.x;
        var n = dX / ball.acc.x;
        var pY = n * ball.acc.y;
        
        if (ai.pos.y != pY) {
            if (pY > ai.pos.y) {
                ai.pos.y += 2;
            } else {
                ai.pos.y -= 2;
            }
        }
        
    } else {
        ai.acc.y = 0;
    }

    drawScores();
}

function drawScores() {
    let x1 = width / 4;
    let x2 = width * 3 / 4;
    let y = txtSize * 1.5;

    noStroke();
    fill(255);
    textAlign(CENTER);
    textSize(txtSize);
    text(playerScores, x1, y);
    text(AIScores, x2, y);
}

function drawSquare() {
    for (let i = 0; i < dots.length; i++) {
        let x = dots[i].x;
        let y = dots[i].y;

        rect(x, y, dSize, dSize);
    }
}

function keyPressed() {
    if (key == 'W' || keyCode == UP_ARROW) {
        player.up();
    } else if (key == 'S' || keyCode == DOWN_ARROW) {
        player.down();

    }
}

function keyReleased() {
    if ((key == 'W' || keyCode == UP_ARROW) || (key == 'S' || keyCode == DOWN_ARROW)) {
        player.stp();
    }
}
