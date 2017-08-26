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
