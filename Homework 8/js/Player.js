class Player {
    constructor(){
        this.pos = createVector(width / 2, height / 2)
        this.angle = 0;
        this.bullets = [];
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        rect(0, 0, 20, 20);
        pop();

        for (var bullet of this.bullets){
            bullet.update();
            bullet.draw();
        }
    }

    update() {
        let speedX = 0;
        let speedY = 0;
        if (keyIsDown(65)) {
            speedX = -2
        }
        if (keyIsDown(68)){
            speedX = 2
        }
        if (keyIsDown(87)) {
            speedY = -2
        }
        if (keyIsDown(83)){
            speedY = 2
        }
        this.pos.add(speedX, speedY);
        this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
    }

    shoot(){
        this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));
    }

    hasShot(enemy) {
        for (let i = 0; i < this.bullets.length; i++) {
          if (dist(this.bullets[i].x, this.bullets[i].y, enemy.pos.x, enemy.pos.y) < 15) {
            this.bullets.splice(i, 1);
            createParticle(this.bullets.x,this.bullets.y);
            return true;
          }
        }
        return false;
      }
}