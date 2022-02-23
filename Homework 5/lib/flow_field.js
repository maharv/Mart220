class flowField{
    constructor(){
        this.mult = random(0.002, 0.01);
        this.density = random(20, 70);
        this.space = width / density
        this.r1 = random(255);
        this.r2 = random(255);
        this.g1 = random(255);
        this.g2 = random(255);
        this.b1 = random(255);
        this.b2 = random(255);
        this.points= []
    }
    createPointMap(){
        for (var x = 0; x < width; x += space) {
            for (var y = 0; y < height; y += space) {
              var p = createVector(x + random(-10,10), y + random(-10,10))
              points.push(p)
            }
          }
          shuffle(points, true)
    }
    startFlowField(){
        {
    if (frameCount <= points.length) {
    var max = frameCount  
  } else {
     var max = points.length
  }
  
    for (var i = 0; i < max; i++) {
    
    hit = collidePointEllipse(points[i].x, points[i].y, 200, 200, 50, 150);
    
    var r = map(points[i].x, 0, width, r1, r2)
    var g = map(points[i].y, 0, height, g1, g2)
    var b = map(points[i].x, 0, width, b1, b2)
    var alpha = map(dist(width / 2,height / 2, points[i].x, points[i].y), 0, 350, 255, 0)
    
    fill(r,g,b,alpha)
    
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
    
    points[i].add(createVector(cos(angle), sin(angle)))
      
    if(dist(width / 2, height / 2, points[i].x,points[i].y) < 350) {
      ellipse(points[i].x, points[i].y, 2)
    }
    
    
  }
  }
    }
}