var t = 0;
var vertices = [];

function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSL);//0-360 for Hue, 0-100 for Saturation, 0-100 for Lightness
  background(200,50,50);

  var margin = 50;
  var grid = new EasyGrid({
    x: margin,
    y: margin,
    columns: 10,
    rows: 10,
    width: width - margin*2,
    height: height - margin*2,
    gutter: 15,
    margin: 10
  });

  var points = 200;
  var degree = 360/points;
  for (var j = 0; j < grid.modules.length; j++) {
    translate(random(-1,1) * noise(j/5) * 50, random(-1,1) * noise(j/5) * 50);
    beginShape();
    var mod = grid.modules[j];
    for (var i = 0; i < points; i++) {
      fill(noise(j/5)*600,50,50);
      var radius = 50 + noise(i/10) * 50;
      var x = mod.x + mod.width/2 + random(-10,10) + cos(radians(i*degree))*radius;
      var y = mod.y + mod.height/2 + random(-10,10) + sin(radians(i*degree))*radius;
      vertex(x,y);
    }
    endShape(CLOSE);
  }

  for (var j = 0; j < 200; j++) {
    var xSup = j * 7;
    var ySup = noise(j) * height;
    fill(noise(j/5)*400,50,50);

    var points = 200;
    var degree = 360/points;
    beginShape();
    for (var i = 0; i < points; i++) {
      var radius = noise(i/5) * 50;
      var x = xSup + cos(radians(i*degree))*radius;
      var y = ySup + sin(radians(i*degree))*radius;
      vertex(x,y);
    }
    endShape();

    //ellipse(x + 100, y, 30, 30);
  }

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
