function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSL);//0-360 for Hue, 0-100 for Saturation, 0-100 for Lightness

  var seed = round(random(0,1000));
  console.log(seed);
  Math.seedrandom(seed);

  background(30);
  noStroke();

  var cols = 3;
  for (var i = 0; i < cols; i++) {
    fill(random(0,360), random(30,100), random(30,70));
    rect(i*width/cols, 0, width/cols, height);
  }

}
