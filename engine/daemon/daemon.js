/**
 * Created by alex on 21/10/2017.
 */
class Daemon {
    constructor(options) {
        this.priority = options.priority;
        this.trigger = options.trigger;
        this.execute = options.execute;
    }
    
    trigger(rplController) {
        this.trigger && this.trigger(rplController);
    }

    execute(rplController) {
        this.execute && this.execute(rplController);
    }
}