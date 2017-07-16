function setup() {
  createCanvas(600, 600);
  noiseDetail(4, 0.75);
  noiseSeed(3);
}

function draw() {
  background(30);
  var noiseStep = frameCount/100;

  translate(width/2, 100);
  beginShape();

  for(var degree = 0; degree <= 180; degree += 3) {

    var x = cos(radians(degree)) * 200;
    var y = sin(radians(degree)) * 200;

    if(degree > 10 && degree < 170) {
      y += noise(noiseStep) * 150;
    }

    vertex(x, y);

    noiseStep += 0.04;
  }

  endShape();
}
