/**
 * Created by alex on 21/04/2017.
 */
class Quadrilateral extends Object {
    constructor(config) {
        super(config);
        this.height = config.height;
        this.width = config.width;
        this.textureUrl = config.textureUrl || null;
        if (this.textureUrl) {
            this.renderFn = ObjectRenderer.renderTexture;
        } else {
            this.renderFn = ObjectRenderer.renderQuad;
        }
    }

    doRender(canvas) {
        this.renderFn(this.x, this.y, this.height, this.width, {
            ctx: canvas.getContext(),
            shape: 'fill',
            color: 'red',
            textureUrl: this.textureUrl ||null
        })
    }
}