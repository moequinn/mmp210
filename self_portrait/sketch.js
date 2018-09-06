// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("white");
	noStroke();
	
	// face
	fill("lightgreen");
	rect(100, 50, 200, 250);
	
	// eyes
	fill("blue");
	ellipse(150, 150, 50, 100);
	ellipse(250, 150, 40, 80);
	
	// ears
	fill("yellow");
	ellipse(150, 150, 40, 40);
	ellipse(250, 150, 30, 30);

	// mouth
	stroke("blue");
	line(150, 250, 250, 280);
}