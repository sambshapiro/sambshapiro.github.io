function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  background(200,200,200);
  fill(30,30,30);


}
var t= 0;
function draw() {
  t++;
  if (t%5==0) {
    clear();
    translate(width/2, height/2);
    fill(random(1,30), random(40,70), random(100,130))
    beginShape();
    for (var i = 0; i < 18; i++) {
      var radius = 200;
      var x = random(cos(radians(i*20))*radius * i%100,cos(radians(i*20))*radius * i%300)
      var y = random(sin(radians(i*20))*radius * i%100,sin(radians(i*20))*radius * i%300)
      var cx = cos(radians(i-5.5))*radius*2;
      var cy = sin(radians(i-5.5))*radius*2;
      console.log(i)
      if (i < 180) {
        vertex(x, y);
      }
      else {
        quadraticVertex(cx,cy,x,y);
        quadraticVertex(cx+10,cy+10,x+10,y+10);
      }
    }
    endShape(CLOSE);
  }
}
