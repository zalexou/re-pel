/**
 * Created by alex on 21/04/2017.
 */
class Quadrilateral extends Object {
    constructor(config) {
        super();
        this.x = config.x;
        this.y = config.y;
        this.height = config.height;
        this.width = config.width;
        this.renderFn = ObjectRenderer.renderQuad;
    }

    doRender(ctx) {
        this.renderFn(this.x, this.y, this.width, this.height, {
            ctx: ctx,
            shape: 'fill',
            color: 'red'
        })
    }
}