function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSL);//0-360 for Hue, 0-100 for Saturation, 0-100 for Lightness

  //background(100,50,50);

  //PARAMETERS
}

function draw() {

  //clear();

  var tileSize = 50;
  var tilesPerRow = 30;
  var tilesPerCol = 30;

  noStroke();
  for (var i = 0; i < tilesPerRow; i++) {
    for (var j = 0; j < tilesPerCol; j++) {
      push();
      translate(i*tileSize, j*tileSize);

      fill((i*10*(5*(1+j)+frameCount/10))%360, 100, 50);
      rect(tileSize/4,tileSize/4, tileSize/2, tileSize/2);
      fill((200 + j*2 * frameCount /10) % 360, 100, 50);
      ellipse(tileSize/1.5, tileSize/1.2, tileSize/5);
      ellipse(tileSize/6, tileSize/2, tileSize/5);

      pop();
    }
  }

  fill(random(360), 50, 50);
  ellipse(mouseX, mouseY, random(5)*tileSize);

}
