/**
 * Created by azalio on 20/04/2017.
 */
const engine = new RepelEngine({
    DOMElement: $('#container'),
    height: 500,
    width: 500
});
engine.init();

const controller = engine.getController();

let redsquare = null;
let squarePosition = {
    x: 100,
    y: 100
};

let moveRedSquare = () => {
    controller.pushCommand(new SetPositionCmd(redsquare, squarePosition));
};

let addSquare = new CreateObjectCmd('Quadrilateral', {
    x: 20,
    y: 20,
    width: 50,
    height: 50
}, (object) => {
    redsquare = object;
    moveRedSquare();
    let pushRedSquare = new MoveToCmd(redsquare, {
        x: 10,
        y: 10
    }, 20);

    let onSpacebarKeydown = new KeystrokeCmd('SPACE', () => {
        controller.pushCommand(pushRedSquare);
    });
    controller.pushCommand(onSpacebarKeydown);

    let onEscapeKeydown = new KeystrokeCmd('ESCAPE', () => {
        pushRedSquare.abort();
    });
    controller.pushCommand(onEscapeKeydown);
});
controller.pushCommand(addSquare);


let onLeftArrowKeydown = new KeystrokeCmd('LEFT', () => {
    squarePosition.x--;
    moveRedSquare()
});
controller.pushCommand(onLeftArrowKeydown);

let onRightArrowKeydown = new KeystrokeCmd('RIGHT', () => {
    squarePosition.x++;
    moveRedSquare()
});
controller.pushCommand(onRightArrowKeydown);

let onUpArrowKeydown = new KeystrokeCmd('UP', () => {
    squarePosition.y--;
    moveRedSquare()
});
controller.pushCommand(onUpArrowKeydown);

let onDownArrowKeydown = new KeystrokeCmd('DOWN', () => {
    squarePosition.y++;
    moveRedSquare()
});
controller.pushCommand(onDownArrowKeydown);