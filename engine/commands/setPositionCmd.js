/**
 * Created by alex on 23/04/2017.
 */
class SetPositionCmd extends Command {
    constructor(object, position, callback) {
        super();
        this.object = object;
        this.position = position;
        this.callback = callback;
    }
    
    execute() {
        this.object.setPosition(this.position);
        this.callback && this.callback(this.position);
    }
}