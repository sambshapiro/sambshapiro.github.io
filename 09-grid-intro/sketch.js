function setup() {

  createCanvas(window.innerWidth,window.innerHeight);
  colorMode(HSL);//0-360 for Hue, 0-100 for Saturation, 0-100 for Lightness
  background(200,50,50);

  var grid = new EasyGrid({
    columns: round(random(3,8)),
    rows: 3,
    width: width,
    height: height,
    gutter: 10,
    margin: 10
  });
  console.log(grid);

  for (var i = 0; i < grid.modules.length; i++) {
    var mod = grid.modules[i]
    rect(mod.x, mod.y, mod.width, mod.height)
  }

  //getModule index starts at 1
  var mod = grid.getModule(4,2);
  fill(80,50,50);
  ellipse(mod.x + mod.width/2, mod.y+mod.height/2, mod.width, mod.height);

  for (var i = 0; i < 5; i++) {
    var mod = random(grid.modules);
    fill(random(360), 50, 50);
    rect(mod.x, mod.y, mod.width, mod.height)
  }

}



function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  background(200,50,50);
}

window.onresize = windowResized;
