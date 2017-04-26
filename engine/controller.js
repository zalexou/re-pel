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

    executeCommand(command, timeOffset) {
        console.log('Executing ', command);
        let chainCmd = command.execute(this, timeOffset);
        let instantChainCommands = _.get(chainCmd, 'chain', []);
        let nextTickCommands = _.get(chainCmd, 'nextTick', []);
        _.forEach(instantChainCommands, (command) => {
            this.executeCommand(command, timeOffset);
        });

        _.forEach(nextTickCommands, (command) => {
            this.pushCommand(command);
        });
    }

    next(timeOffset) {
        let stamp = Date.now();
        let i = 0;
        while ((this.commands.length > 0) && (i < this.commands.length)) {
            let currentCmd = this.commands[i];
            this.executeCommand(currentCmd, timeOffset);
            i++;
        }
        this.commands = this.commandBuffer;
        this.commandBuffer = [];
        setTimeout(() => this.next(Date.now() - stamp), 20);
    }
}
