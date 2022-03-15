function Vehicle(x,y){ //cunstroctor function to make vehicle ojects
    this.pos = createVector(random(width),random(height));
    this.target = createVector(x,y);
    //this.vel = createVector();
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
     //each vehicles obj needs a position, a target position, a velocity and an acceleration
     this.r=8
     this.maxspeed = 10; 
     this.maxforce = 1;
   }
   
   Vehicle.prototype.behaviours = function(){ 
    var arrive = this.arrive(this.target); 
    var mouse = createVector(mouseX,mouseY);
     var flee = this.flee(mouse);
     
     arrive.mult(1);
     flee.mult(5);
     //fleep force is much more forcefull than the arrive force
     
     this.applyForce(flee);
     this.applyForce(arrive);
     
   }
   
   Vehicle.prototype.applyForce = function(f){
   this.acc.add(f); //so if multiple forces are at play, we could add all of them in the acceleration and hence all the animations must start by 0
   }
   
   Vehicle.prototype.update = function(){ //way of attaching functions to objects
    this.pos.add(this.vel);
     this.vel.add(this.acc);
     //basic physics idea of acc changing velocity and velocity changing acceleration
     this.acc.mult(0); //this multiplies everything by 0 so that everything starts from o for the applyForce function to work
   }
   
   
   Vehicle.prototype.show = function() {
      stroke(255);
      strokeWeight(10);
      point(this.pos.x,this.pos.y); //linking the vehicle to particular points and their characteristics  
   }
   
   Vehicle.prototype.arrive = function(target){
    var desired = p5.Vector.sub (target, this.pos); 
     var d = desired.mag();
     var speed = this.maxspeed;
     if (d<100){
     speed = map(d, 0, 100, 0, this.maxspeed);
     }
     desired.setMag(speed);
     var steer = p5.Vector.sub(desired, this.vel);
     steer.limit(this.maxforce);
     return steer; 
   }
   
   Vehicle.prototype.seek = function(target){
    var desired = p5.Vector.sub (target, this.pos); //this line is subtracting the vector points from position to target, you subtract the two vectors 
     //desired vel is always its aximum speed
     desired.setMag(this.maxspeed);
     var steer = p5.Vector.sub(desired, this.vel);
     steer.limit(this.maxforce);
     return steer; //the idea is to calculate that force and return it to be applied in seek
   }
   
   Vehicle.prototype.flee = function(target){
    var desired = p5.Vector.sub (target, this.pos); 
     var d = desired.mag();
     if (d<50){
     desired.setMag(this.maxspeed);
     desired.mult(-1);
     var steer = p5.Vector.sub(desired, this.vel);
     steer.limit(this.maxforce);
     return steer; //the idea is to calculate that force and return it to be applied in seek
     }else{
     return createVector(0,0);
     }
   }