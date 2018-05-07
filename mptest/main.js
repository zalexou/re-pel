/**
 * Created by alex on 26/08/2017.
 */
let engine = new RepelEngine({
    DOMElement: $('#container'),
    height: 900,
    width: 1200
});
engine.init();
window.controller = engine.getController();

let scene = new Scene();
scene.load();

//truc a la con qui trigger toutes les 150 frames logiques
let daemon = new Daemon({
    priority: 1,
    trigger: (ctrl) => ctrl.frameCount % 150 === 0,
    execute: (ctrl) => console.log('salut je suis a la frame num'+ ctrl.frameCount)
});
window.controller.registerDaemon(daemon);

let oSquare;
let addSquare = new CreateObjectCmd('Quadrilateral', {
    x: 150,
    y: 250,
    width: 50,
    height: 50
}, (object) => {
    oSquare = object;
    let goLeft = new KeystrokeCmd('LEFT', () => {
        let mL = new MoveToCmd(oSquare, Infinity, 50)
    });
});
controller.pushCommand(addSquare);

