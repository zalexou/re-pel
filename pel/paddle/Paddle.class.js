/**
 * Created by alex on 13/07/2017.
 */
class Paddle {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 475;
        this.height = 10;
        this.margin = 20;
        this.paddleSpotsIndexes = 2;

        this.width = (this.game.canvas.width - (4 * (this.margin))) / 3;
        this.rplObj = null;

        this.currentPos = 0;
    }

    onLEFT() {
        if (this.currentPos > 0) {
            this.currentPos--;
            this.movePaddle();
        }
    }

    onRIGHT() {
        if (this.currentPos < this.paddleSpotsIndexes) {
            this.currentPos++;
            this.movePaddle();
        }
    }

    movePaddle() {
        let setPosCmd = new SetPositionCmd(this.rplObj, {
            y: this.y,
            x: (this.width + (2 * this.margin)) * this.currentPos
        });
        this.game.repelController.pushCommand(setPosCmd);
    }

    getHitPoints() {
        let hp = [];
        for (let i = 0; i <= this.paddleSpotsIndexes; i++) {
            hp.push({
                x: ((this.width + (2 * this.margin)) * i) + (this.width / 2),
                y: this.y
            })
        }
        return hp;
    }

    init() {
        //creates the repel object
        let createCmd = new CreateObjectCmd('Quadrilateral', {
            x: this.x,
            y: this.y,
            height: this.height,
            width: this.width
        }, (repelObj) => {
            this.rplObj = repelObj;
        });
        this.game.repelController.pushCommand(createCmd);

        this.game.repelController.pushCommand(new KeystrokeCmd('LEFT', () => this.onLEFT()));
        this.game.repelController.pushCommand(new KeystrokeCmd('RIGHT', () => this.onRIGHT()));
    }
}