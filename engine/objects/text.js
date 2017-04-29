/**
 * Created by alex on 30/04/2017.
 */
class Text extends Object {
    constructor(config) {
        super(config);
        this.text = text;
        this.renderFn = ObjectRenderer.renderText;
    }

    doRender(canvas) {
        this.renderFn(this.x, this.y, this.text, {
            ctx: canvas.getContext()
        });
    }
}