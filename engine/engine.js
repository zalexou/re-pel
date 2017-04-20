/**
 * Created by azalio on 20/04/2017.
 */

class RepelEngine {
    /**
     * Expected values:
     *  - DOMRootElement: the parent DOM node for the rendering area
     *  - height: canvas's height in pixels
     *  - width: canvas's width in pixels
     * @param configuration
     */
    constructor(configuration) {
        if (!configuration.DOMElement instanceof jQuery) {
            this.DOMRootElement = $(configuration.DOMElement);
        } else {
            this.DOMRootElement = configuration.DOMElement;
        }
        this.height = parseInt(configuration.height);
        this.width = parseInt(configuration.width);
    }

    /**
     * Creates the rendering canvas in the DOMRootElement and sets the context to 2d
     */
    createCanvas() {
        this.canvas = $('<canvas/>', {
            id: 'testcanvas',
            height: this.height,
            width: this.width
        });
        this.DOMRootElement.append(this.canvas);
        this.ctx = this.canvas.get(0).getContext('2d');
    }

    init() {
        this.createCanvas();
    }
}