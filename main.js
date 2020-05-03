let diameter;
let angle = 0;

function setup() {
  createCanvas(710, 400);
  diameter = height - 4;
  noStroke();
  fill(255, 204, 0);
}

function draw() {
  background('blue');

  let d1 = 4 + (sin(angle) * diameter) / 2 + diameter / 2;
  let d2 = 6 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  let d3 = 8 + (sin(angle + PI) * diameter) / 2 + diameter / 2;

  ellipse(0, height / 2, d1, d1);
  ellipse(width / 2, height / 2, d2, d2);
  ellipse(width, height / 2, d3, d3);

  angle += 0.02;
}