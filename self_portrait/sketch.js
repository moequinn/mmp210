// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(204,248,212,0.6);
	noStroke();
	
    // body
	fill("blue");
	ellipse(320, 340, 250, 250);
    
    // front_layer
    fill("White")
    triangle(260, 260, 320, 360, 380, 260);
    
	//hair
	fill("black")
	ellipse(320, 180, 185, 210);
    
    // face
	fill("tan");
	ellipse(320, 190, 180, 210);
	
	// outter_eyes 
	fill("white");
	ellipse(280, 170, 40, 70); //my_left
	ellipse(350, 170, 40, 70); //my_right
	
	// mid_eyes
	fill("brown");
	ellipse(280, 170, 30, 40); //my_left
	ellipse(350, 170, 30, 40); //my_right
    
    // pupil
	fill("black");
	ellipse(280, 170, 20, 20); //my_left
	ellipse(350, 170, 20, 20); //my_right 

	// mouth
	stroke("brown");
	line(270, 250, 350, 270);   
}
