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
    this._drawHUD();
    this._drawClickLabel();
  }



  //---------------
  // I N T E R N A L S
  _clearScreen() {
    background(207, 254, 255);
  }
 
  //---------------
  // D R A W
  _drawHUD() {  
    textFont("waker");
    textSize(15);
    fill(30, 20, 10);
    text("Lives: " + env.lives, 220, 30);
    text("Points: " + env.bricksDestroyed, 10, 30);
    text("Highscore: " + env.highScore, 100, 30);
    

  }
  _drawPaddle() {
    fill(255, 255, 255);
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
  }
  _drawBall() {
    fill(255, 255, 255);
    ellipse(ball.x, ball.y, ball.radius, ball.radius);
  }
  _drawLevel() {
    fill(255, 255, 255);
    let aBrick;
    for (let i = 0; i < level.wall.allBricks.length; i++) {
      aBrick = level.wall.allBricks[i];
      rect(aBrick.x, aBrick.y, aBrick.width, aBrick.height, aBrick.points);
    }

    
    // Ball off bottom
    if (ball.y > env.height) {
      this._handleDeathScenario();
    }  
  }
  _drawClickLabel() {
    if (env.isPaused) {
  
      let label = 'Click To Continue!';
  
      if (env.isPaused && env.currentLevel === 1 && env.bricksDestroyed < 1 && env.lives === env.startLives) {
        label = "Click To Play!";
      }

       if (env.lives < 1) {
        textSize(15);
        fill(255, 0, 0); 
        textFont("fantasy");
        label = "LOSE! Click To Play Again!";
       }


      text(label, 200, 200)  
    };
    
  }

  _handleDeathScenario() {
    env.lives--;
      
    // new _drawBall() {}
    ball.resetToStartPosition();
    
    env.isPaused = true;

    
  }
  
}