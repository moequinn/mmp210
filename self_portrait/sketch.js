// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("white");
	noStroke();
	
    // body
	fill("blue");
	ellipse(320, 340, 250, 250);
    
	// face
	fill("tan");
	ellipse(320, 180, 200, 250);
	
	// outter_eyes 
	fill("white");
	ellipse(280, 150, 50, 100); //left
	ellipse(350, 150, 40, 80); //right
	
	// mid_eyes
	fill("brown");
	ellipse(280, 150, 40, 40); //left
	ellipse(350, 150, 30, 30); //right
    
    // pupil
	fill("black");
	ellipse(280, 150, 30, 30); //left
	ellipse(350, 150, 20, 20); //right

	// mouth
	stroke("brown");
	line(270, 270, 350, 290);
    
}