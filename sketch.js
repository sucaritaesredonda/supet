var canvas;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  // mic = new p5.AudioIn();
  // mic.start();
  //background(175);
    noStroke();
  fill(0);
}




function mouseClicked() {
  // Change color to random on mouse click
  fill(random(255), random(255), random(255));
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX; // Inverse X
  let iy = height - mouseY; // Inverse Y
  background(random(255), random(255), random(255),10);
  
  // Set random fill color on mouse click
 frameRate(10)
  
  // First set of ellipses
  fill(random(255), random(255), random(255));
  ellipse(x, height/2, y, y);
fill(random(255), random(255), random(255));
  ellipse(ix, height/2, iy, iy);
  
  // Second set of ellipses
  fill(random(0), random(255), random(255));
  ellipse(x, height/4, y, y);
fill(random(255), random(255), random(255));
  ellipse(ix, height/4, iy, iy);
  
  // First set of rects
  fill(random(255), random(255), random(255));
  rect(x, height/6, y, y);
fill(random(255), random(255), random(255));
  rect(ix, height/6, iy, iy);
  
  // Second set of rects
  fill(random(255), random(255), random(255));
  rect(x, height/8, y, y);
 fill(random(255), random(255), random(255));
  rect(ix, height/8, iy, iy);
  
  // First set of ellipses (lower)
  fill(random(255), random(255), random(255));
  ellipse(x, height/10, y, y);
  fill(random(255), random(255), random(255));
  ellipse(ix, height/10, iy, iy);
  
  // Second set of rects (lower)
  fill(random(255), random(255), random(255));
  rect(x, height/8, y, y);
 fill(random(255), random(255), random(255));
  rect(ix, height/8, iy, iy);
  //stroke("0000")
}
