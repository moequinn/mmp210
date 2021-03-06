/*
    Arduino + p5 for the final project 12-03-2018
*/
var serial;
var portName = "/dev/cu.usbmodem14101";
var sensorValue;

// variables for left paddle
var xlpaddle = 75;


// variables for right paddle
var xrpaddle = 710;
var yrpaddle = 180;

var wpaddle = 15;
var hpaddle = 80;

// squirrel measurements

var xsquirrel = 5;
var ysquirrel = 10;
var wsquirrel = 80;
var hsquirrel = 120;

// rabbit measurements

var xrabbit = 720;
var yrabbit = 10;
var wrabiit = 80;
var hrabbit = 120;

// variables for ball
var x = 320;
var y = 180;
var xspeed = 3;
var yspeed = 3;
var r = 25; // ball measurements
var wr =60; // bball image measurements

// images
var squirrel;
var rabbit1;
var backgroundImage;
var bballImage;


// score board
var txtSize = 30;
var rabbitScore = 0;
var squirrelScore = 0;

// sound effects
var bat;
var wall;
var giggling;

function preload() {
    
    // sounds
    bat = loadSound('wall.mp3');    
    wall = loadSound('wall.mp3');
    giggling = loadSound('giggling-squirrel.mp3');
    
    // images
    squirrel1 = loadImage("squirrel1.png");
    rabbit1 = loadImage("rabbit1.png");
    backgroundImage = loadImage("background.jpg");
    bballImage = loadImage("bball.png");

}


function setup() {
    createCanvas(800, 500);

    //image(backgroundImage, 0, 0);

    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}



function draw() {
    
   // background(20)
    
    
    image(backgroundImage, 0, 0);

    var yPot = map(sensorValue, 0, 1023, height - hsquirrel, 0);

    //var x = map(sensorValue, 0, 1023, height, 0);


    noStroke();
    fill(255);
    //fill(30);

    //left paddle
    rect(xlpaddle, yPot, wpaddle, hpaddle);
    
    // squirrelimage
    image(squirrel1, xsquirrel, yPot, wsquirrel, hsquirrel);
    
    //image(rabbit1, xrabbit, constrain(yrpaddle, hpaddle / 2, height - hpaddle) - hpaddle / 2, wrabiit, hrabbit);



    //right paddle
    rect(xrpaddle, constrain(yrpaddle, hpaddle / 2, height - hpaddle) - hpaddle / 2, wpaddle, hpaddle);
    
    // rabbit image
    image(rabbit1, xrabbit, constrain(yrpaddle, hpaddle / 2, height - hpaddle) - hpaddle / 2, wrabiit, hrabbit);

    fill(255);

    // Ball
    fill(0);
    
    ellipse(x, y, r * 1, r * 1);
    image(bballImage, x - 25, y- 35, wr, wr);

    x += xspeed;
    y += yspeed;

    yrpaddle = y;
    

    // right paddle collision
    if (x > xrpaddle && x < xrpaddle + wpaddle && y > yrpaddle - hpaddle / 2 && y < yrpaddle + hpaddle / 2) {
        console.log('collide');
        xspeed = -xspeed;
        bat.play();
    }

    // ball against left paddle 
    noFill();
    stroke('red');
    if (x > xlpaddle && x < xlpaddle + wpaddle && y > yPot && y < yPot + hpaddle) {
        console.log('collide');
        xspeed *= -1;
        wall.play();
    }
    

    if (x > width - r) {
        // player scored
        squirrelScore++;
        
        // play a sound
        giggling.play();
        
    }

    if (x < -r) {
        // computer scored
        rabbitScore++;
        
        // play a sound
        giggling.play();
        
        // reset the ball
        reset();
    }

    if (y > height - r || y < r) {
        yspeed = -yspeed;
    }
drawScores();
}

function reset() {
    x = 320;
    y = 180;
    xspeed = 5;
    yspeed = 6;
}

function drawScores() {
    var hscore = 45;

    stroke(255);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text(squirrelScore, width / 4, hscore);
    text(rabbitScore, width * 3 / 4, hscore);
}