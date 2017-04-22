/**
 * Created by alex on 22/04/2017.
 */
class Circle extends Object {
    constructor(config) {
        super(config);
        this.diameter = config.diameter || 10;
        this.renderFn = ObjectRenderer.renderCircle;
    }
    
    doRender(canvas) {
        this.renderFn(this.x, this.y, this.diameter, {
            ctx: canvas.getContext(),
            color: 'red'
        })
    }
}