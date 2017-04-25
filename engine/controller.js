/**
 * Created by alex on 22/04/2017.
 */
class RepelController{
    constructor(engine) {
        this.engine = engine;
        this.commands = [];
        this.commandBuffer = [];
        this.listenedKeycodes = {};
        this.listenEvents();
        this.next();
    }

    listenEvents() {
        $(document).on("keydown", (e) => {
            this.manageKeydown(e);
        });
    }

    manageKeydown(event) {
        var keystrokeCallback = this.listenedKeycodes[event.keyCode];
        keystrokeCallback ? keystrokeCallback && keystrokeCallback() : null;
    }

    addObject(object) {
        engine.objects.push(object);
        return object.guid;
    }

    registerKeystrokeCmd(cmd) {
        this.listenedKeycodes[cmd.eventKeycode] = () => cmd.execute(this);
    }

    pushCommand(cmd) {
        if (cmd instanceof KeystrokeCmd) {
            this.registerKeystrokeCmd(cmd);
        } else {
            this.commandBuffer.push(cmd);
        }
    }

    next(timeOffset) {
        let stamp = Date.now();
        _.forEach(this.commands, (command) => {
            var executionResult = command.execute(this, timeOffset);
        });
        this.commands = this.commandBuffer;
        this.commandBuffer = [];
        setTimeout(() => this.next(Date.now() - stamp), 20);
    }
}
