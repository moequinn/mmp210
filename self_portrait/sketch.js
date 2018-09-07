// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("white");
	noStroke();
	
	// face
	fill("lightgreen");
	ellipse(320, 180, 200, 250);
	
	// eyes
	fill("blue");
	ellipse(280, 150, 50, 100); //left
	ellipse(250, 150, 40, 80); //right
	
	// ears
	fill("yellow");
	ellipse(220, 150, 40, 40);
	ellipse(250, 150, 30, 30);

	// mouth
	stroke("blue");
	line(150, 250, 250, 280);
}