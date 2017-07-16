function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSL);//0-360 for Hue, 0-100 for Saturation, 0-100 for Lightness
  background(200,50,50);

  var margin = 50;
  var grid = new EasyGrid({
    x: margin,
    y: margin,
    columns: 3,
    rows: 5,
    width: width - margin*2,
    height: height - margin*2,
    gutter: 15,
    margin: 10
  });

  var hueRatio = 360 / (grid.state.columns * grid.state.rows);
  var prevHue = 0;
  for (var j = 0; j < grid.modules.length; j++) {
    var count = 0;
    var mod = grid.modules[j];
    //rect(mod.x, mod.y, mod.width, mod.height)
    var y = mod.y;
    for (var i = mod.x; i < mod.x+mod.width; i+=5) {
      if (y < mod.y+mod.height) {
        if (count % 3 == 0) {
          stroke(random(0,360), 75, 40);
        }
        else {
          stroke(random(prevHue, hueRatio*(j+1)),75,70);
        }
        line(mod.x,y, i,mod.y);
        y+=5;
        count++;
      }
    }
    var y = mod.y + mod.height;
    var count = 0;
    for (var i = mod.x+mod.width; i > mod.x; i-=5) {
      if (y > mod.y) {
        if (count % 3 == 0) {
          stroke(random(0,360), 75, 40);
        }
        else {
          stroke(random(prevHue, hueRatio*(j+1)),75,70);
        }
        line(mod.x+mod.width,y, i,mod.y+mod.height);
        y-=5;
        count++;
      }
    }
    prevHue += hueRatio;
  }
}



function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  background(200,50,50);
}

window.onresize = windowResized;
