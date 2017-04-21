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
        this.canvas = new Canvas({
            height: 500,
            width: 500
        });
        this.DOMRootElement.append(this.canvas.getDOMElement());
    }

    render() {
        this.canvas.clear();
        _.forEach(this.objects, (object) => {
            object.doRender(this.canvas);
        });
        requestAnimationFrame(() => this.render());
    }

    manageKeydown(e) {
        if(e.keyCode === Keys.code('LEFT')) {
            console.log('LEFT');
            //movePaddle(-1);
        } else if(e.keyCode === Keys.code('RIGHT')) {
            console.log('RIGHT');
            //movePaddle(1);
        }
    }

    listenKeystrokes() {
        $(document).on('keydown', (e) => this.manageKeydown(e))
    };

    init() {
        this.createCanvas();
        this.objects = [new Quadrilateral({
            x: 20,
            y: 20,
            width: 50,
            height: 50
        })];
        this.listenKeystrokes();
        requestAnimationFrame(() => this.render());
    }
}