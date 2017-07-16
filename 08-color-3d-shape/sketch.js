function setup() {

  //var hue = 207.91450851584486;
  //184.21496204332328
  //136.21860482866705
  //269.00330842750606
  var hue = random(360);
  var text = document.createTextNode("Hue " + hue);
  document.body.appendChild(text);

  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSL);//0-360 for Hue, 0-100 for Saturation, 0-100 for Lightness
  background(200,50,50);

  var cols = [];
  for (var i = 0; i < 10; i++) {
    cols.push(color(hue, i * 10, i * 10));
  }
  //accent color
  cols.push(color(hue+50, 100, 50));


  translate(width/2, height/2);
  noStroke();
  beginShape();
  vertex(random(width), random(height));
  var points = 30;
  var degree = 360/points;
  for (var j = 0; j < 10; j++) {
    for (var i = 0; i < points; i++) {
      fill(random(cols));
      var x = cos(radians((i+2*j) * degree)) * random(130,170);
      var y = sin(radians((i+2*j) * degree)) * random(130,170);
      ellipse(x * j/3, y * j/3, j*6, j*6);
      quadraticVertex(cos(-cos(x)), sin(-sin(x)), x,y);
      endShape();
    }
  }

}
