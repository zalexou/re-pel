/**
 * Created by alex on 26/08/2017.
 */
let testSceneData = {
    height: 800,
    width: 1500,
    background: {
        type: 'color',
        resource: '#CCC'
    },
    layout: {
        ground: [{
            x: 0, y: 600, endX: 1500, endY: 600
        }],
        exits: [],
        ladders: []
    }
};

class Scene {
    constructor(sceneData) {
        this.data = testSceneData;
    }

    load() {
        //Creates all objects in the scene

        //A quad for bg
        let createBg = new CreateObjectCmd('Quad', {
            x: 0,
            y: 0,
            height: this.data.height,
            width: this.data.width
        }, (rplBackground) => {
            this.data.background.rplObject = rplBackground;
        });
        window.controller.pushCommand(createBg);

        let createGroundElement = (groundElement) => {
            let gdElementCmd = new CreateObjectCmd('Line', {
                x: groundElement.x,
                y: groundElement.y,
                endX: groundElement.endX,
                endY: groundElement.endY
            }, (rplGrd) => {
                groundElement.rplObject = rplGrd;
            });
            window.controller.pushCommand(gdElementCmd);
        };

        //Lines for ground elements
        _.forEach(this.data.layout.ground, (groundElement) => {
            createGroundElement(groundElement);
        });
    }
}

class LoadSceneCommand extends Command {
    constructor(scene) {
        this.scene = scene;
        super();
    }

    execute(controller) {

    }
}