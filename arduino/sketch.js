/*
    Arduino + p5 example
*/
var serial;
var portName = "COM8";
var sensorValue;

function setup() {
    createCanvas(640, 360);
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open("COM8");
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function draw() {
    var c = map(sensorValue, 0, 1023, 0, 200);
    
    var d = map(sensorValue, 0, 1023, 150, 250);
    
    // sea
    background(c, d, c + 150);
    
    var y = map(sensorValue, 0, 1023, height, 0);
    
    //var x = map(sensorValue, 0, 1023, height, 0);
    
    // blue worm 1
    noStroke();
    fill('blue');
    ellipse(120, y, 50);
    
    // middle body
    ellipse(120, y + 35, 55);
    
    // middle body 2
    ellipse(120, y + 80, 55);
    
    // bottom body
    ellipse(120, y + 120, 60);
    
    // blue worm 2
    noStroke();
    fill('blue');
    ellipse(220, y - 20, 50);
    
    // middle body
    ellipse(220, y + 15, 55);
    
    // middle body 2
    ellipse(220, y + 60, 55);
    
    // bottom body
    ellipse(220, y + 100, 60);
    
    // blue worm 3
    noStroke();
    fill('blue');
    ellipse(320, y - 40, 50);
    
    // middle body
    ellipse(320, y - 5, 55);
    
    // middle body 2
    ellipse(320, y + 40, 55);
    
    // bottom body
    ellipse(320, y + 80, 60);
    
    // blue worm 4
    noStroke();
    fill('blue');
    ellipse(420, y - 20, 50);
    
    // middle body
    ellipse(420, y + 15, 55);
    
    // middle body 2
    ellipse(420, y + 60, 55);
    
    // bottom body
    ellipse(420, y + 100, 60);
    
    // blue worm 5
    noStroke();
    fill('blue');
    ellipse(520, y, 50);
    
    // middle body
    ellipse(520, y + 35, 55);
    
    // middle body 2
    ellipse(520, y + 80, 55);
    
    // bottom body
    ellipse(520, y + 120, 60);
    
}

