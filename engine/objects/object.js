/**
 * Created by azalio on 20/04/2017.
 */
class Object {
    constructor(config) {
        this.guid = window.SVC.guid.generate();
        this.setPosition({x: config.x || 0, y: config.y || 0});
    }

    setPosition(position) {
        this.x = position.x;
        this.y = position.y;
    }
}