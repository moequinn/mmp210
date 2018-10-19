/* Meme v 1 
   By Moe Quinn
   10.18.2018
   Animation
   mmp 210 week 6
*/

//("squirrel-2936889_1280.jpg")

var squirrel; // global
var nuts;
var cw = 900;
var ch = 900;
var offsetw1 = 670;
var offseth1 = 200;
var offsetw2 = 220;
var offseth2 = 200;
var offsetw3 = 220;
var offseth3 = 670;
var offsetw4 = 670;
var offseth4 = 670;

function preload() {
    squirrel = loadImage("squirrel-2936889_1280.jpg");
    nuts = loadImage("nuts-2715924_960_720.jpg");
    going = loadImage("4137075_web.jpg");
    got = loadImage("squirrel-eating-out-of-bird-feeder_800.jpg");
}

function setup() {
    createCanvas(cw, ch);
}

function draw() {
    background(0);
    
var w = width;
var h = height;
var cenW = CENTER;
var cenH = CENTER;
    
    //image(squirrel, 0, 0, w, h);
    //image(squirrel, 0, 0, w/2, h);
    //image(squirrel, w/2, 0, w/2, h);
    
var col = color(255, 255, 255, 255);
var size = 50;
var font = "Impact";
    
    fill(col);
    textAlign(cenW, cenH);
    textSize(size);
    stroke(0);
    //text("Did you said Nuts", w/2, h/2);
    
    //col = color(255, 255, 255, 127);
    fill(col);
    
    /* four quandrant */	
	if (mouseX > w/2 && mouseY > h/2) {
		rect(w/2, h/2, w, h);
        text("Got Nuts",  w - offsetw1, h - offseth1);
        //bottom right 1
        image(got, h/2, w/2, w/2, h/2);
	} else if (mouseX < w/2 && mouseY > h/2) {
		rect(0, h/2, w/2, h);
        text("Going Nuts",  w - offsetw2, h - offseth2);
        //bottom left 2
        image(going, 0, h/2, w/2, h/2);
	} else if (mouseX > w/2 && mouseY < h/2) {
		rect(w/2, 0, w, h/2);
        text("Did You Said Nuts",  w - offsetw4, h - offseth4);
        //top right 4
        image(squirrel, w/2, 0, w/2, h/2);
	} else {
		rect(0, 0, w/2, h/2);
        text("Stack of Nuts",  w - offsetw3, h - offseth3);
        //top left 3
        image(nuts, 0, 0, w/2, h/2);
	} 
}

