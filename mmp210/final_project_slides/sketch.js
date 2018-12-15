/*
    final project presentation slides
*/
var slide = 0;
var pong;
//var squirrel;
//var rabiit;
var vs;

function preload() {
    pong = loadImage("Pong.png");
    //squirrel = loadImage("squirrel1.jpg");
    //rabiit = loadImage("rabbit.jpg");
    vs = loadImage("squirrel_rabbit.jpg");
}

function setup() {
    createCanvas(800, 500);
    textSize(60);
    textFont('monospace');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background(220);
    
    if (slide == 0) {
        text("Final Project Idea", width/2, height/2);
    } else if (slide == 1) {
        textSize(35);
        text("Potentiometer sensor", 400, 100);
        
        // fsr graphic
        //rect(width/2, 300, 50, 300);
        rect(470, 300, 100, 50);
        ellipse(400, 300, 80, 150);
        rect(418, 375, 10, 30);
        rect(400, 375, 10, 30);
        rect(382, 375, 10, 30);
        
    } else if (slide == 2) {
        text("Pong Game", 400, 20);
        image(pong, 0, 100);
        //image(, 400, 100);
        
    } else if (slide == 3) {
        text("Theme: Squirrel VS Rabbit", 400, 20);
        //image(squirrel, 0, 100);
        //image(rabiit, 400, 100);
        image(vs, 0, 50);
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}
