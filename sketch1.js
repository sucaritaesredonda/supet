var canvas;
let images = [];
const squareSize = 400;
let thresholdFilter = false;
let invertFilter = false;
let posterizeFilter = false;


function preload() {
  images.push(loadImage('/DSC05978.jpg'));
  images.push(loadImage('/DSC05992.jpg'));
  images.push(loadImage('/imagenes/DSC06014.jpg'));
  images.push(loadImage('/imagenes/DSC06030.jpg'));
  images.push(loadImage('/imagenes/DSC06077.jpg'));
  images.push(loadImage('/imagenes/DSC06094.jpg'));
  images.push(loadImage('/imagenes/DSC06118.jpg'));
}


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
  imageMode(CENTER);
  for (const img of images) {
    img.resize(squareSize, squareSize);
  }
  background(93, 193, 185);
  frameRate(2);
}


function draw() {
  const x = squareSize / 2 + squareSize * floor(random(width / squareSize));
  const y = squareSize / 2 + squareSize * floor(random(height / squareSize));
  
translate(x, y);
  const r = (PI / 2) * random([0, 1, 2, 3]);
 
  filter(THRESHOLD, 0.4);
  
  if (thresholdFilter) {
    filter(THRESHOLD, 0.4);
    image(random(images), 0, 0);}
    else if (invertFilter) {
    filter(INVERT);
    image(random(images), 0, 0);
      
  }  else if (posterizeFilter) {
    filter(POSTERIZE,7);
    image(random(images), 0, 0);
      
  }
  else {
    image(random(images), 0, 0);
  }
}

function mouseClicked() {
  if (thresholdFilter) {
    thresholdFilter = !thresholdFilter;
  } else {
    invertFilter = !invertFilter;
  }
  // Uncomment to prevent any default behavior.
  // return false;
}


function keyPressed() {
  if (key === 'd' || key === 'D') {
    thresholdFilter = !thresholdFilter;
  } else if (key === 'f' || key === 'F') {
    invertFilter = !invertFilter;
  }
  else if (key === 's' || key === 'S') {
    posterizeFilter = !posterizeFilter;
  }
   
}