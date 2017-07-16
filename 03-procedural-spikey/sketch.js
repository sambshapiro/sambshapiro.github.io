function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  background(200,200,200);
  fill(30,30,30);

}
var t = 0;
function draw() {

  t++;

  if (t % 5 == 0) {

    clear();

    translate(width/2, height/2);
    fill(random(1,30), random(40,70), random(100,130))
    beginShape();
    for (var i = 0; i < 360; i+= 3) {
      //var radius = random(100,300);
      if (i % 2 == 0) {
        radius = 200;
      }
      else if (i < 200) {
        radius = random(100,400);
      }
      else {
        radius = random(200,i+40);
      }
      var x = cos(radians(i))*radius;
      var y = sin(radians(i))*radius;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
