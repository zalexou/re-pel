/**
 * Created by alex on 22/04/2017.
 */
class RepelController{
    constructor(engine) {
        this.engine = engine;
        this.commands = [];
        this.commandBuffer = [];
        this.listenedKeycodes = {};
        this.daemons = [];
        this.frameCount = 0;
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
        this.engine.objects.push(object);
        return object.guid;
    }

    registerKeystrokeCmd(cmd) {
        this.listenedKeycodes[cmd.eventKeycode] = () => cmd.execute(this);
    }

    registerDaemon(daemon) {
        this.daemons.push(daemon);
        this.daemons = _.sortBy(this.daemons, [(d) => d.priority])
    }

    executeDaemons() {
        _.forEach(this.daemons, (daemon) => {
            daemon.trigger(this) ? daemon.execute(this) : null;
        });
    }

    pushCommand(cmd) {
        if (cmd instanceof KeystrokeCmd) {
            this.registerKeystrokeCmd(cmd);
        } else {
            this.commandBuffer.push(cmd);
        }
    }

    killCommand(command) {

    }

    executeCommand(command, timeOffset) {
        //console.log('Executing ', command);
        if (command.abortOnNextTick) {
            this.killCommand(command);
            return;
        }
        let chainCmd = command.execute(this, timeOffset);
        command.triggerExeCallbacks();
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
        
        //Executing commands
        let i = 0;
        while ((this.commands.length > 0) && (i < this.commands.length)) {
            let currentCmd = this.commands[i];
            this.executeCommand(currentCmd, timeOffset);
            i++;
        }
        this.commands = this.commandBuffer;
        this.commandBuffer = [];
        
        //Calling daemons
        this.executeDaemons();
        this.frameCount++;
        setTimeout(() => this.next(Date.now() - stamp), 20);
    }
}
