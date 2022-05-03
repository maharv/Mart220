function setup(){
let img = createImage(800,800);
img.loadPixels();
createCanvas (800,800);
background (0);

function drawShapes(number1, number2) {
    let startX = floor(random(number1-50)) + 50;
    let startY = floor(random(number2- 15)) + 15;
    console.log(startX);

    for (x = startX; x < startX + 20; x++) {
      for (y = startY; y < startY + 100; y++) {
        if (x > startX + 10 && x < startX + 25 && y > startY + 10 && y < startY + 25) {
          writeColor(img, x, y, 100, 100, 200, floor(random(255)));
        } else {
          writeColor(img, x, y, 100, 60, 125, floor(random(255)));
        }
      }
    }
  }

  let x, y;
  for (y = 0; y < img.height; y++) {
    for (x = 0; x < img.width; x++) {
      let red = random(255);
      let green = random(75);
      let blue = random(50);
      let alpha = 100;
      writeColor(img, x, y, red, green, blue, alpha);
    }
  }

  for(y = 0; y < 30; y++)
  {
    for (x = 0; x < img.width; x++) 
    {
      writeColor(img, x, y, 50, 0, 0, 27);
    }
  }

  y = img.height - 1;
  for(let i = 0; i < 30; i++)
  {
    for (x = 0; x < img.width; x++) 
    {
      writeColor(img, x, y, 50, 0, 0, 27);
    }
    y--;
  }

function writeColor(image, x, y, red, green, blue, alpha) {
    let index = (x + y * width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = alpha;
  }

  xCoord = 50;
  yCoord = 80;
  for (var i = 0; i < 5; i++) {
      for(var j = 0; j < 7; j++)
      {
          drawShapes(xCoord,yCoord );
          xCoord += 150;
      }
      xCoord = 200;
      yCoord += 500;
    
  }
  

  img.updatePixels();
  image(img, 0, 0);
}