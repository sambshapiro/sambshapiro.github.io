function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSL);//0-360 for Hue, 0-100 for Saturation, 0-100 for Lightness

  //background(100,50,50);

  pattern(width/2 - 50, height/2 - 50, 200, 200);
}

function pattern(x,y,w,h) {
  push();
  translate(x,y);
  rotate(radians(30));

  fill(random(360), 50, 50);
  //rect(0,0,w*2,h*2);
  ellipse(x+w/2, y, w*noise(x)*2);
  ellipse(x-w/2, y, w*noise(x)*2);
  if (w > 10) {
    pattern(x + w/4, y, w*.8, h*.8);
    pattern(x - w/4, y, w*.8, h*.8);
  }
  pop();
}
