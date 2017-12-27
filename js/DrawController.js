console.log('[DC] hi');


class DrawController {

  constructor(width, height) {

    this.width = width;
    this.height = height;

    console.log('[DC] Awesome. You created a DrawController!');
    this.setup();
  }

  setup() {
    createCanvas(this.width, this.height);
  }
  draw() {
    background(207, 254, 255);
    rect(paddleController.getX(), this.height-50, 75, 20);
  }
}




// ===--===--===--===--===--===--===--===--===--===--
// Using Processing... so for now we just let
// it call the draw function and we redirect it to
// our own drawController's draw()
// ===--===--===--===--===--===--===--===--===--===--
function draw() {
  if (drawController) {
    drawController.draw();
  }
}
