/**
 * Created by alex on 23/04/2017.
 */
class Command {
    constructor() {
        this.periodicity = 0;
        this.abortOnNextTick = false;
    }

    abort() {
        console.log('Aborting', this);
        this.abortOnNextTick = true;
    }
}