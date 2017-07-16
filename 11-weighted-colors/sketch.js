var t = 0;
var vertices = [];

function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSL);//0-360 for Hue, 0-100 for Saturation, 0-100 for Lightness
  //background();

  vertices.push(createVector(50,50));
  vertices.push(createVector(100,100));
  vertices.push(createVector(50,100));
}

function draw() {
  clear();
  fill(chooseRandomColor());
  //rect(width/2 - 50, height/2 - 50, 100,100);
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
  if (vertices[2].x < width/2) {
    vertices[2].x+=2;
  }
  t++;
}

function chooseRandomColor() {
  return randomColor = chooseWeighted([
    { value: color(50, 50, 50), weight: 4 },
    { value: color(100, 50, 50), weight: 2 },
    { value: color(150, 50, 50), weight: 2 },
    { value: color(200, 50, 50), weight: 1 },
    { value: color(250, 50, 50), weight: 2 },
    { value: color(300, 50, 50), weight: 2 },
    { value: color(350, 50, 50), weight: 4 }
  ]);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  background(200,50,50);
}

window.onresize = windowResized;

// Define function used to find weights.
function chooseWeighted(opts) {

  // get sum of all the weights. This is where underscore is really great.
  var sum = _.reduce(opts, function(memo, opt) { return memo + opt.weight; }, 0);

  // now pick a random number between 0 and the sum of the weights
  var ran = random(sum);

  // loop through all the options until you find a weight that is greater
  // or equal to the random number. Subtract weight from random num every time.
  for( var i = 0; i < opts.length; i++){

    var opt = opts[i];

    if(opt.weight >= ran) {
      return opt.value;
    }

    ran -= opt.weight;
  }
}
