function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  background(200);

  beginShape();
  var icecreamW = 300;
  vertex(width/2,height/2+200);
  vertex(width/2-icecreamW/2,200);
  var controlp1 = [520,35];
  var controlp2 = [600,35];
  //var bVer = [width/2+icecreamW/2,300];
  var bVer = [width/2+icecreamW/2,200];
  bezierVertex(controlp1[0], controlp1[1], controlp2[0], controlp2[1], bVer[0],bVer[1]);
  endShape(CLOSE);

  //show control points
  strokeWeight(3);
  line(bVer[0],bVer[1],controlp1[0], controlp1[1]);
  line(bVer[0],bVer[1],controlp2[0], controlp2[1]);
  strokeWeight(1);
  ellipse(controlp1[0],controlp1[1],8);
  ellipse(controlp2[0],controlp2[1],8);

}
