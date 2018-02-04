class DrawController {
  constructor(width, height) {
    // create our model
    this.setup();
  }
  setup() {
    createCanvas(env.width, env.height);
  }
  update() {
    this.draw();
  }
  draw() {
    this._clearScreen();
    this._drawPaddle();
    this._drawBall();
    this._drawLevel();
  }
  _clearScreen() {
    background(207, 254, 255);
  }
  _drawPaddle() {
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
  }
  _drawBall() {
    ellipse(ball.x, ball.y, ball.radius, ball.radius);
  }

  _drawLevel() {
    let aBrick;
    for (let i = 0; i < level.wall.allBricks.length; i++) {
      aBrick = level.wall.allBricks[i];
      rect(aBrick.x, aBrick.y, aBrick.width, aBrick.height, aBrick.points);
    }

    // fonts : https://www.khanacademy.org/computer-programming/textfontfont-size-processingjs/940030209
    
    textFont("waker");
    textSize(20);
    fill(30, 20, 10);
    text("Lives: " + env.lives, 220, 30);
    text("Points: " + env.bricksDestroyed, 10, 30);
    fill(255, 255, 255);

    // Ball off bottom
    if (ball.y > env.height && ball.y < env.height +6) {
      this._handleDeathScenario();
    }  
  }
  _handleDeathScenario() {
    env.lives--;
      
    // new _drawBall() {}
    ball.resetToStartPosition();
    
    env.isPaused = true;

    
  }
  
}