
var x = 0;
var y = 0;
let tree;
let bluePaint;
let blueWall;

function preload() {
  tree = loadModel('obj/tree.obj', true);
  bluePaint = loadImage('textures/bluePaint.png');
  blueWall = loadImage('textures/blueWall.jpg');
  blueWater = loadImage('textures/blueWater.jpg');
}

function setup() {
  createCanvas (400, 300, WEBGL);
  textSize(60);
  
}

function draw() {
  text('Mark Harvey', 0, 0);
  background(175);
  normalMaterial();


push();
  scale(0.9);
  rotateX(720);
  rotateY(frameCount * 0.01);
  model(tree);
pop();

  createBox(50, 50, 50, -100, -100, true);
  createBox(20,20,20,10,10,true);
  createTorus(100,10,10,8, 100, 100);
  createTorus(20,50,3,9, 100, 100);
  createTorus(100,10,10,8, -100, -100);
  createTorus(100,10,10,8, 10, 10);
  createTorus(100,10,10,8, 100, -100);
  createTorus(100,10,10,8, -100, 100);
  
  push();
  translate(100,-100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(bluePaint);
  ellipsoid(30, 40, 40);
  pop();

  push();
  translate(-100,100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(blueWall);
  cylinder(20, 50);
  pop();
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
  normalMaterial();

  texture(bluePaint);
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
  texture(blueWater);
  torus(r, tR, detailX, detailY);
  pop();
}