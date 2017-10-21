/**
 * Created by alex on 26/08/2017.
 */
let engine = new RepelEngine({
    DOMElement: $('#container')
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