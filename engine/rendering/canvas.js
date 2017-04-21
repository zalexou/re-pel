/**
 * Created by alex on 21/04/2017.
 */
class Canvas {
    constructor(options) {
        this.canvas = $(document.createElement('canvas'));
        this.canvas.attr('id', 'testcanvas');
        this.canvas.attr('height', options.height);
        this.canvas.attr('width', options.width);
        this.ctx = this.canvas.get(0).getContext('2d');
    }

    getDOMElement() {
        return this.canvas;
    }

    getContext() {
        return this.ctx;
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}