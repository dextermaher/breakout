class Environment {
    constructor() {
        this.top                    = 0;
        this.width                  = 400;
        this.height                 = 400;
        this.shouldBounceOffBottom  = false;
        this.ballStartX             = 100;
        this.ballStartY             = 250;
        this.ballVelocityX          = 5;
        this.ballVelocityY          = 5;
        this.ballRadius             = 10;
        this.paddleWidth            = 100;
        this.paddleHeight           = 20;


        this.brickWidth             = 40;
        this.brickHeight            = 20;
        this.maxBrickHeight         = 15;

        this.lives                  = 3;
    }
    update() {}
}