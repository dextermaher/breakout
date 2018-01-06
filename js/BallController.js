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
    flipVelocityX(){
        this.velocityX *= -1;
    }

    flipVelocityY(){
        this.velocityY *= -1;
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
            this.flipVelocityX();
        }

        // change velocityY if y is out of bounds
        // check top
        if (this.y < 0) {
            this.flipVelocityY();
        }
        // check bottom
        else if (env.shouldBounceOffBottom && this.y > env.height) {
            this.flipVelocityY();
        }
    }
    _updateForPaddle() {
        // within paddle height
        if (this.y >= paddle.top && this.y <= paddle.bottom) {
            // ball hit paddle
            if (this.x >= paddle.left && this.x <= paddle.right){
                this.flipVelocityY();
            }   
        }
    }
}