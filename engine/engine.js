/**
 * Created by azalio on 20/04/2017.
 */

class RepelEngine {
    /**
     * Expected values:
     *  - DOMRootElement: the parent DOM node for the rendering area
     *  - height: canvas's height in pixels, defaults to container size
     *  - width: canvas's width in pixels, defaults to container size
     * @param configuration
     */
    constructor(configuration) {
        if (!configuration.DOMElement instanceof jQuery) {
            this.DOMRootElement = $(configuration.DOMElement);
        } else {
            this.DOMRootElement = configuration.DOMElement;
        }
        this.height = parseInt(configuration.height || this.DOMRootElement.innerHeight());
        this.width = parseInt(configuration.width || this.DOMRootElement.innerWidth());
        this.controller = new RepelController(this);
        this.resourceLibrary = new ResourceLibrary();
        //TODO a modifier
        window.resourceLibrary = this.resourceLibrary;
    }

    getController() {
        return this.controller;
    }

    /**
     * Creates the rendering canvas in the DOMRootElement and sets the context to 2d
     */
    createCanvas() {
        this.canvas = new Canvas({
            height: this.height,
            width: this.width
        });
        this.DOMRootElement.append(this.canvas.getDOMElement());
    }

    render() {
        this.canvas.clear();
        _.forEach(this.objects, (object) => {
            object.doRender(this.canvas);
        });
        requestAnimationFrame(() => this.render())
    }

    init() {
        this.createCanvas();
        this.objects = [];
        requestAnimationFrame(() => this.render());
    }
}