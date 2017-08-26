/**
 * Created by alex on 22/04/2017.
 */
class Line extends Object {
    constructor(config) {
        super(config);
        this.renderFn = ObjectRenderer.renderLine;
        this.x = config.x;
        this.y = config.y;
        this.endX = config.endX;
        this.endY = config.endY;
    }
    
    doRender(canvas) {
        this.renderFn(this.x, this.y, this.endX, this.endY, {
            ctx: canvas.getContext()
        });
    }
}