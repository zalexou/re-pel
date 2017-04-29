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

let onRedSquareCreated = (object) => {
    redsquare = object;
    let path = [{x: 250, y: 480}, {x: 25, y: 25}, {x: 150, y: 0}];
    let pathCmd = new FollowPathCmd(redsquare, path, 50);
    controller.pushCommand(pathCmd);
};

let addSquare = new CreateObjectCmd('Quadrilateral', {
    x: squarePosition.x,
    y: squarePosition.y,
    width: 50,
    height: 50
}, (object) => {
    onRedSquareCreated(object);
});
controller.pushCommand(addSquare);