class BallController {
    constructor() {
        // create our model
        this.x          = env.ballStartX;
        this.y          = env.ballStartY;
        this.velocityX  = env.ballVelocityX;
        this.velocityY  = env.ballVelocityY;
        this.radius     = env.ballRadius;
    }
    update() {
        this._updateForBoundaries();
        this._updateForPaddle();
        this._updatePosition();
    }
    _updatePosition() {
        this.x          += this.velocityX;
        this.y          += this.velocityY;
    }
    _updateForBoundaries() {

        // - - - - - - - - - - -
        // BOUNCE OFF WALLS
        // change velocityX if x is out of bounds
        if (this.x > env.width || this.x < 0) {
            this.velocityX *= -1;
        }

        // change velocityY if y is out of bounds
        // check top
        if (this.y < 0) {
            this.velocityY *= -1;
        }
        // check bottom
        else if (env.shouldBounceOffBottom && this.y > env.height) {
            this.velocityY *= -1;
        }
    }
    _updateForPaddle() {
        // within paddle height
        if (this.y >= paddle.top && this.y <= paddle.bottom) {
            // ball hit paddle
            if (this.x >= paddle.left && this.x <= paddle.right){
                this.velocityY *= -1;
            }   
        }

       
    }
}