
const particles = [];
var enemys = [];
var player;
function setup(){
    createCanvas(700,700);
    player = new Player();
}

function draw(){
    background(51)
    rectMode(CENTER);
    player.draw();
    player.update();

    for (let i = enemys.length - 1; i >= 0; i--) {
        enemys[i].draw();
        enemys[i].update();
        
        if (player.hasShot(enemys[i])) {
          enemys.splice(i, 1);
          
        }
      }
      
      if (frameCount % 200 == 0) {
        enemys.push(new Enemy(2));
      }
    }
function mouseClicked(){
    player.shoot();
    createParticle(mouseX,mouseY);
}

function createParticle(x,y)
{
    for(let i = 0; i < 5; i++) {
        let p = new Particle(x,y);
        particles.push(p);

    }
    for (let i = particles.length - 1; i >= 0; i--){
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}