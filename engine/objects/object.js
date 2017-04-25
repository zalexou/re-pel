/**
 * Created by azalio on 20/04/2017.
 */
class Object {
    constructor(config) {
        this.guid = window.SVC.guid.generate();
        this.setPosition({x: 0, y:0});
    }

    setPosition(position) {
        this.x = position.x;
        this.y = position.y;
    }
}