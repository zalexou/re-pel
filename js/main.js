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
let addSquare = new CreateObjectCmd('Quadrilateral', {
    x: 20,
    y: 20,
    width: 50,
    height: 50
});
controller.pushCommand(addSquare);



let onLeftArrowKeydown = new KeystrokeCmd('LEFT', () => console.log('LEFT has been pressed'));
controller.pushCommand(onLeftArrowKeydown);
