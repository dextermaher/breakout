console.log('[MAIN] hi');


// OUR GLOBAL OBJECTS
let paddleController;
let drawController;

function main() {
  // do any start-up work you want here
  paddleController = new PaddleController('Bobo');
  drawController = new DrawController(400, 400);
}
// do work after PROCESSING has loaded
if (main) window.onload = main;
