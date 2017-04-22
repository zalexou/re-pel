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
controller.addObject(new Quadrilateral({
    x: 20,
    y: 20,
    width: 50,
    height: 50
}));

