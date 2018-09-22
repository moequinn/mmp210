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
    
    
// front layer
    fill(frontlayercolor)
    triangle(frontlayerx1, frontlayery1, frontlayerx2, frontlayery2, frontlayerx3, frontlayery3);
    
    var haircolor ="black"
    var hairx = 320
    var hairy = 180
    var hairwidth = 185
    var hairheight = 210
    
// hair
    fill(haircolor)
	ellipse(hairx , hairy, hairwidth, hairheight);
    
    var facecolor = "tan"
    var facex = 320
    var facey = 190
    var facewidth = 180
    var faceheight = 210
    
// face
	fill(facecolor);
	ellipse(facex, facey, facewidth, faceheight);
    
    var oeyescolor = "white"
    var oeyeslx = 280
    var oeyesly = 170
    var oeyeslw = 40
    var oeyeslh = 70
    var oeyesrx = 350
    var oeyesry = 170
    var oeyesrw = 40
    var oeyesrh = 70
	
// outter eyes 
	fill(oeyescolor);
	ellipse(oeyeslx, oeyesly, oeyeslw, oeyeslh); //my_left
	ellipse(oeyesrx, oeyesry, oeyesrw, oeyesrh); //my_right
    
    var mideyescolor = "brown"
    var mideyeslx = 280
    var mideyesly = 170
    var mideyeslw = 30
    var mideyeslh = 40
    var mideyesrx = 350
    var mideyesry = 170
    var mideyesrw = 30
    var mideyesrh = 40
	
// mid eyes
	fill(mideyescolor);
	ellipse(mideyeslx, mideyesly, mideyeslw, mideyeslh); //my_left
	ellipse(mideyesrx, mideyesry, mideyesrw, mideyesrh); //my_right
    
    var pupilcolor = "black"
    var pupillx = 280
    var pupilly = 170
    var pupillw = 20
    var pupillh = 20
    var pupilrx = 350
    var pupilry = 170
    var pupilrw = 20
    var pupilrh = 20
    
// pupil
	fill(pupilcolor);
	ellipse(pupillx, pupilly, pupillw, pupillh); //my_left
	ellipse(pupilrx, pupilry, pupilrw, pupilrh); //my_right
    
    var mouthcolor = "brown"
    var mouthx = 270
    var mouthy = 250
    var mouthw = 350
    var mouthh = 270

// mouth
       stroke(mouthcolor);
       line(mouthx, mouthy, mouthw, mouthh);   
}
