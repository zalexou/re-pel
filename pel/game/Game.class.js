/**
 * Created by alex on 13/07/2017.
 */
class Game {
    constructor(config) {
        this.canvas = {
            height: config.height,
            width: config.width,
            DOMElement: config.DOMElement
        };
        
        this.repelEngine = new RepelEngine({
            DOMElement: this.canvas.DOMElement,
            height: this.canvas.height,
            width: this.canvas.width
        });
        
        this.repelEngine.init();
        this.repelController = this.repelEngine.getController();
        this.globalVars = config.vars;
    }

    getGlobal(varName) {
        return this.globalVars[varName];
    }

    start() {
    }
}