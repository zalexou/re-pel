/**
 * Created by alex on 15/07/2017.
 */
class Ball {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.velocity = 50;
        this.rplObj = null;
    }

    init() {
        //Creates repel object
        let ballCmd = new CreateObjectCmd('Circle', {
            x: this.x,
            y: this.y,
            diameter: 10
        }, (repelObject) => {
            this.rplObj = repelObject;
            this.launch();
        });
        game.repelController.pushCommand(ballCmd);

    }

    launch() {
        //sets trajectory
        let destination = this.game.hitpoints[0];

        let moveCmd = new MoveToCmd(this.rplObj, destination, this.velocity)
        this.game.repelController.pushCommand(moveCmd);
    }
}