var mainColor =  180;

function setup() {
    createCanvas(640, 480);
    background(120);
    frameRate(25);
    noStroke();
    rectMode(CENTER);
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size= random(200);
    var size2= random(200);
    ellipse(random(width), random(height), size, size2);
    
    size= random(200);
    size2= random(200);
    rect(random(width), random(height), size, size2);

    size= (10);
    size2=(100);
    rect(100,100,size,size2);

    size= (100);
    size2=(10);
    rect(150,50,size,size2);

    size= (10);
    size2=(100);
    rect(200,100,size,size2);

    size= (10);
    size2=(50);
    rect(150,75,size,size2);

    size= (10);
    size2=(100);
    rect(250,100,size,size2);

    size= (10);
    size2=(100);
    rect(300,100,size,size2);
    
    size= (50);
    size2=(10);
    rect(275,50,size,size2);

    size= (50);
    size2=(10);
    rect(275,75,size,size2);

    size= (10);
    size2=(100);
    rect(350,100,size,size2);

    size= (10);
    size2=(100);
    rect(400,100,size,size2);

    size= (50);
    size2=(10);
    rect(375,100,size,size2);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; 
    }
    

    if (frameCount > 100) { 
        noLoop();
    }
}