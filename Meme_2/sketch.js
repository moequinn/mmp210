/* Meme v 2 
   By Moe Quinn
   10.18.2018
   Animation
   mmp 210 week 6
*/

//("squirrel-2936889_1280.jpg")

var squirrel; // global
var nuts;
var float;
var glow;
var leap;
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
var x = 100;
var y = 100;
var x2 = 200;
var y2= 200;
var speed = 10;
var yspeed = speed;

function preload() {
    squirrel = loadImage("squirrel-2936889_1280.jpg");
    nuts = loadImage("nuts-2715924_960_720.jpg");
    going = loadImage("4137075_web.jpg");
    got = loadImage("squirrel-eating-out-of-bird-feeder_800.jpg");
    float = loadImage("1shutterstock_61211596.png");
    glow=loadImage("1aaron_buchholz_blown_glass_acorn_copper_blue_with_gold_aventurine_and_iris_gold_cap_and_stem_L5.5in_W3.5in_H3.5in_55_7791_A0103.png");
    leap = loadImage("1shutterstock_128099222-1527261104-6675.png");
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
    
    image(float, x, y, 100, 100);
    image(glow, x2, 100, 100, 100);
    image(float, x, 100, 100, 100);
	x += speed;
	if (x > w - 51 || x < 51) {
		speed *= -1;
	}
    x2 += yspeed;
    if (x2 > w +- 91 || x < 41){
        //speed * -1;
        
    }
    
    image(float, x, y, 100, 100);
	x += 2;
	y += 2;
	if (x > width) {
		x = 0;
	}
	if (y > height) {
		y = 0;
	}
    
    image(float, x2, y2, 100, 100);
	x2 += 4;
	y2 += 4;
	if (x2 > width) {
		x2 = 0;
	}
	if (y2 > height) {
		y2 = 2;
	}
    image(leap, x - 20, y -100, 200, 200);
	x += random(-5, 5);
	y += random(-5, 5);
}
