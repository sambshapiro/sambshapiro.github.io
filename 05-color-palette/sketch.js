function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSL);//0-360 for Hue, 0-100 for Saturation, 0-100 for Lightness
  background(200,50,50);

  var margin = 0;
  translate(50,50);
  noStroke();
  for (var i = 0; i < 360; i++) {
    for (var j = 0; j < 100; j++) {
      fill(i, j, 50);
      rect(i*3,j*5,50,50);
    }
  }

  /*
  translate(100, 100);
  noStroke();
  for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
  fill(i*10,100,50 + 5*j);
  ellipse(i*130,j*50,200,200);
}
}*/

}
