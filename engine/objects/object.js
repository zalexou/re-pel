/**
 * Created by azalio on 20/04/2017.
 */
class Object {
    constructor(config) {
        this.guid = window.SVC.guid.generate();
        this.x = config.x || 0;
        this.y = config.y || 0;
    }
}