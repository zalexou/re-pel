/**
 * Created by azalio on 21/04/2017.
 */
class ObjectRenderer {
    constructor(context) {
        this.ctx = context;
    }

    /**
     * Option types:
     *  - shape: "stroke", "fill"
     * @param x
     * @param y
     * @param height
     * @param width
     * @param options
     */
    renderQuad(x, y, height, width, options) {
        this.ctx.beginPath();
        this.context.strokeStyle = options.strokeColor || 'black';
        this.ctx.strokeRect(x, y, width, height);
        this.ctx.stroke();
    }
}