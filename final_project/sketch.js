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

function setup() {
    createCanvas(800, 500);
    
    
    player = new player;
    ai = new AI();
    ball = new Ball();
    
    for(let y = dSize / 2; y < height; y += dSize * 2) {
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
    for(let i = 0; i <dots.length; i++) {
        let x = dots[i].x;
        let y = dots[i].y;
        
        rect(x, y, dSize, dSize);
    }
}

function keyPressed() {
    if(key == 'W' || keyCode ==UP_ARROW){
        player.up();
    }else if(key == 'S' || keyCode ==DOWN_ARROW){
        player.down();
        
    }
}

function keyReleased() {
    if((key == 'W' || keyCode == UP_ARROW) || (key == 'S' || keyCode == DOWN_ARROW)){
        player.stp();
    }
}