
var x = 0;
var y = 0;

function setup() {
  createCanvas (400, 300, WEBGL);
}

function draw() {
  background(175);
  normalMaterial();

  createBox(50, 50, 50, -100, -100, true);
  createBox(20,20,20,10,10,true);
  createSphere(50, 100, 20, true);
  createTorus(100,10,10,8, 100, 100);
  createTorus(20,50,3,9, 100, 100);
  createTorus(100,10,10,8, -100, -100);
  createTorus(100,10,10,8, 10, 10);
}

function createBox (w, h, d, transX, transY, move) {
  push();
  if (move) {
    translate(transX + x, transY);
  
  }else{
    translate(transX, transY);
  }

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  box(w,h,d);
  pop();
}

function createSphere (r, transX, transY, move) {
  push();
  if (move) {
    translate(transX + x, transY);
  
  }else{
    translate(transX, transY);
  }

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  sphere(r);
  pop();
}

function createTorus(r, tR, detailX, detailY, x , y) {
  push();
  translate(x, y);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(r, tR, detailX, detailY);
  pop();
}