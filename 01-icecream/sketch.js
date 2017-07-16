function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  //background('#fae');

  /*push();
  translate(100,100);
  rotate(Math.PI/6);
  fill(0);
  //rect(0,0,100,100);
  translate(100,100);
  pop();*/

  fill(0);
  var triangleOffsetX = 180;
  var triangleOffsetY = 60;
  triangle(200 + triangleOffsetX,200 + triangleOffsetY, 400 + triangleOffsetX,200 + triangleOffsetY, 300 + triangleOffsetX,400 + triangleOffsetY);
  ellipse(480,250,170);

  fill(255);
  var waffleW = 18;
  var waffleH = 18;
  var squaresPerRow = 20;
  var rows = 10;
  var waffleMarg = 1.1;
  var totalWaffleWidth = waffleW*rows;
  for (var i = 0; i < rows; i++) {
    var rowWidth = waffleW*i*waffleMarg;
    for (j = 0; j < i; j++) {
      rect(390 + j*waffleW*waffleMarg + (totalWaffleWidth - rowWidth)/2, 440 - i*waffleH*waffleMarg, waffleW, waffleH);
    }
  }


}
