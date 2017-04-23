/**
 * Created by alex on 23/04/2017.
 */
class KeystrokeCmd extends Command {
    constructor(keyName, callback) {
        super();
        this.eventKeycode = Keys.code(keyName);
        this.callback = callback;
    }
    
    execute() {
        this.callback && this.callback();
    }
}