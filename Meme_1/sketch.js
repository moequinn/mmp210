/* Meme v 1 
   By Moe Quinn
   10.9.2018
   Conditional Logic
   mmp 210 week 5
*/

//("squirrel-2936889_1280.jpg")

    var squirrel; // global
    var cw = 500;
    var ch = 500;

function preload() {
    squirrel = loadImage("squirrel-2936889_1280.jpg");
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
    
    image(squirrel, 0, 0, w, h);
    //image(squirrel, 0, 0, width/2, height);
    //image(squirrel, width/2, 0, width/2, height);
    
    var col = color(255, 255, 255, 255);
    var size = 50;
    var font = "Impact";
    
    fill(col);
    textAlign(cenW, cenH);
    textSize(size);
    stroke(0);
    text("Did you said Nuts", w/2, h/2);
    
    col = color(255, 255, 255, 127);
    fill(col);
    
    /* four quandrant */	
	if (mouseX > width/2 && mouseY > height/2) {
		rect(width/2, height/2, width, height);
        text("1",  w/4, h/4);
        ellipse(475, 475, 50, 50);
        image(squirrel, height/2, width/2, width/2, height/2);
	} else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, height/2, width/2, height);
        text("2",  w/4, h/4);
        ellipse(225, 475, 50, 50);
        image(squirrel, 0, height/2, width/2, height/2);
	} else if (mouseX > width/2 && mouseY < height/2) {
		rect(width/2, 0, width, height/2);
        text("4",  w/4, h/4);
        ellipse(475, 225, 50, 50);
        image(squirrel, width/2, 0, width/2, height/2);
	} else {
		rect(0, 0, width/2, height/2);
        text("3",  w/4, h/4);
        ellipse(0, 0, 50, 50);
        image(squirrel, 0, 0, width/2, height/2);
	}
}