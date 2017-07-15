/**
 * Created by azalio on 20/04/2017.
 */

//Initializing game
let game = new Game({
    DOMElement: $('#container'),
    height: 500,
    width: 500
});
game.start();

//Adding paddle
let paddle = new Paddle(game);
paddle.init();
game.setHitPoints(paddle.getHitPoints());

//Adding a ball
let ball = new Ball(game);
ball.init();

console.log('HP:', paddle.getHitPoints())