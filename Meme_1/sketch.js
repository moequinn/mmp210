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
    
    var col = 255;
    var size = 50;
    var font = "Impact";
    var w = width;
    var h = height;
    
    fill(col);
    textAlign(cenW, cenH);
    textSize(size);
    textFont(font);
    text("Did you said Nuts", w/2, h/2);
    
    /* for each quandrant, determine of mouse 
		is inside bounds */	
	if (mouseX > width/2 && mouseY > height/2) {
		rect(width/2, height/2, width, height);
	} else if (mouseX < width/2 && mouseY > height/2) {
		rect(0, height/2, width/2, height);
	} else if (mouseX > width/2 && mouseY < height/2) {
		rect(width/2, 0, width, height/2);
	} else {
		rect(0, 0, width/2, height/2);
	}
}