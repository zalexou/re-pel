/**
 * Created by azalio on 21/04/2017.
 */
class ObjectRenderer {
    /**
     * Option types:
     *  - shape: "stroke", "fill"
     * @param x
     * @param y
     * @param height
     * @param width
     * @param options
     */
    static renderQuad(x, y, height, width, options) {
        options.ctx.beginPath();
        if (options.shape === 'stroke') {
            options.ctx.strokeStyle = options.color || 'black';
            options.ctx.strokeRect(x, y, width, height);
            options.ctx.stroke();
        } else {
            options.ctx.fillStyle = options.color;
            options.ctx.fillRect(x, y, width, height);
            options.ctx.fill();
        }
    }
}