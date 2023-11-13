let capture;

function setup() {
  createCanvas(600, 600);
  capture = createCapture(VIDEO);
  capture.size(400, 400);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  filter(THRESHOLD);
}
