var points = []
var mult = 0.002
let multSlider;

function setup(){
  createCanvas (800, 800)
  background(38)
  angleMode(DEGREES)
  noiseDetail(1)
  myButton = new Clickable()
  myName = new Clickable()
  projectName = new Clickable()
  
  mult = random(0.002, 0.01)
  var density = random(20, 70)
  var space = width / density
  
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10,10), y + random(-10,10))
      points.push(p)
    }
  }
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)
}


function draw(){
  noStroke()
  fill(255)
  
  
  myButton.draw();
  myButton.text = "Go Back"
  myName.draw();
  myName.text = "Mark Harvey"
  myName.locate(700,750)
  projectName.draw()
  projectName.locate(0,100)
  projectName.text = "Noise Flow Field"
  
  for (var i = 0; i < points.length; i++) {
    
    hit = collidePointEllipse(points[i].x, points[i].y, 200, 200, 50, 150);
    
    var r = map(points[i].x, 0, width, r1, r2)
    var g = map(points[i].y, 0, height, g1, g2)
    var b = map(points[i].x, 0, width, b1, b2)
    
    fill (r,g,b)
    
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
    
    points[i].add(createVector(cos(angle), sin(angle)))
    
    ellipse(points[i].x, points[i].y, 2)
  }
}