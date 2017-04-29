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

    /**
     * 
     * @param x
     * @param y
     * @param diameter
     * @param options
     */
    static renderCircle(x, y, diameter, options) {
        options.ctx.beginPath();
        options.ctx.arc(Math.round(x), Math.round(y), Math.round(diameter / 2), 0, 2 * Math.PI, false);
        options.ctx.strokeStyle = options.color || 'black';
        options.ctx.strokeWidth = 1;
        options.ctx.stroke();
    }

    static renderText(x, y, text, options) {
        options.ctx.font="30px Verdana";
        options.ctx.fillStyle = "black";
        options.ctx.fillText(text, x, y);
    }
}