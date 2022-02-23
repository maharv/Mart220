var points = []
var mult = 0.002
let multSlider;
var myFlowField = new flowField;


function setup(){
  createCanvas (800, 800)
  background(38)
  angleMode(DEGREES)
  noiseDetail(1)
  backButton = new Clickable()
  myName = new Clickable()
  projectName = new Clickable()
  resetButton = new Clickable()
  myFlowField.createPointMap();
  
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)
  

}


function draw(){
myFlowField.startFlowField();
  
  
  
  noStroke()
  fill(255)
  resetButton.onRelease = function() {
  location.reload()
  console.log("reset")
}
  resetButton.onHover = function() {
    resetButton.color = "#B9B9B9";
  }
  resetButton.onOutside = function() {
    resetButton.color = "#FFFFFF";
  }
  backButton.onHover = function() {
    backButton.color = "#B9B9B9";
  }
  backButton.onOutside = function() {
    backButton.color = "#FFFFFF";
  }
  projectName.onRelease = function() {

  }
  myName.textFont = "monospace";
  projectName.textFont = "monospace";
  projectName.textSize = 10;
  resetButton.draw();
  resetButton.locate(0,50);
  resetButton.text = "Reset"
  backButton.draw();
  backButton.text = "Go Back"
  myName.draw();
  myName.text = "Mark Harvey"
  myName.locate(700,750)
  projectName.draw()
  projectName.locate(0,100)
  projectName.text = "Noise Flow Field"
  
}