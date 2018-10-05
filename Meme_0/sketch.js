/* Meme v 0 
   By Moe Quinn
   10.2.2018
    rough draft
    mmp 210 week 5
*/

//("squirrel-2936889_1280.jpg")

var squirrel; // global

function preload() {
    squirrel = loadImage("squirrel-2936889_1280.jpg");
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    
    image(squirrel, 0, 0, width, height);
    //image(squirrel, 0, 0, width/2, height);
    //image(squirrel, width/2, 0, width/2, height);
    
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(50);
    textFont("Comic Sans MS");
    text("Did you said Nuts", width/2, height/2);
}