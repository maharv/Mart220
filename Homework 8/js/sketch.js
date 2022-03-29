
var playerChar;
var result, runresult;
var fence
function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  jumpresult = loadStrings('assets/characterjump.txt')
}


function setup() {
  createCanvas(400, 400);
  playerChar = createSprite(0, 250);
  playerChar.addAnimation('idle', result[0], result[result.length-1]);
  playerChar.addAnimation('run', runresult[0], runresult[runresult.length-1]);
  playerChar.addAnimation('jump', jumpresult[0], jumpresult[jumpresult.length-1]);

  fence = createSprite(300, 300);
  fence.addImage(loadImage('assets/fence1.png'))
}

function draw() {
  background(220);
  if (keyDown('w'))
  {
    playerChar.changeAnimation('jump')
  }
  if(keyDown('d'))
  {
    playerChar.changeAnimation('run');
    playerChar.velocity.x +=.1;
    if(playerChar.collide(fence))
    {
      playerChar.changeAnimation('idle');
    }
    
  }
  else
  {
    playerChar.changeAnimation('idle');
    playerChar.velocity.x = 0;
  }
  playerChar.debug = mouseIsPressed;
  drawSprites()
}