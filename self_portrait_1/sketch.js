// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
       background(204, 248, 212, 0.6);
       noStroke();
	
    var bodyColor = "blue"
    var bodyx = 320
    var bodyy = 340
    var bodywidth = 250
    var bodyheight = 250
    
    // body
       fill(bodyColor);
       ellipse(bodyx, bodyy, bodywidth, bodyheight);
    
    var frontlayercolor = "white"
    var frontlayerx1 = 260
    var frontlayery1 = 260
    var frontlayerx2 = 320
    var frontlayery2 = 360
    var frontlayerx3 = 380
    var frontlayery3 = 260
    
    
    // front_layer
       fill("White")
       triangle(frontlayerx1, frontlayery1, frontlayerx2, frontlayery2, frontlayerx3, frontlayery3);
    
    // hair
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
