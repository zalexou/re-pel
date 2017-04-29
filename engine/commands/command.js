/**
 * Created by alex on 23/04/2017.
 */
class Command {
    constructor() {
        this.periodicity = 0;
        this.abortOnNextTick = false;
        this.exeCallbacks = [];
        this.endCallbacks = [];
    }

    abort() {
        console.log('Aborting', this);
        this.abortOnNextTick = true;
    }

    registerExecutionCallback(cb) {
        this.exeCallbacks.push(cb);
    }

    triggerExeCallbacks() {
        _.forEach(this.exeCallbacks, (cb) => {
            cb && cb(this);
        })
    }

    registerEndCallback(cb) {
        this.endCallbacks.push(cb);
    }

    triggerEndCallbacks() {
        _.forEach(this.endCallbacks, (cb) => {
            cb && cb(this);
        })
    }
}