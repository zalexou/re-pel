/**
 * Created by alex on 23/04/2017.
 */
class MoveToCmd extends Command {
    constructor(object, destination, velocity) {
        super();
        this.destination = destination;
        this.object = object;
        this.velocity = velocity;
    }

    getNextCoordinates(distancePx) {
        let point = this.object;
        let target = this.destination;
        let velocity = distancePx;

        let targetDist = this.distanceToTarget(point, target);
        let nextCoordinates;

        //If the next tick will pass object through destination
        //sets the next coords to destination
        if (targetDist <= velocity) {
            nextCoordinates = this.destination;
        } else {
            let ratio = targetDist / velocity;

            let H = target.y - point.y;
            let h = H / ratio;

            let L = target.x - point.x;
            let l = L / ratio;

            nextCoordinates = {
                x: point.x + l,
                y: point.y + h
            };
        }
        return nextCoordinates;
    }

    distanceToTarget() {
        return Math.hypot(this.destination.x - this.object.x, this.destination.y - this.object.y);
    }

    execute(controller, timeDelta) {
        let distancePx = (this.velocity / 1000) * timeDelta;
        let nextCoordinates = this.getNextCoordinates(distancePx);
        let setPositionCmd = new SetPositionCmd(this.object, nextCoordinates);
        if (_.isEqual(this.destination, nextCoordinates)) {
            //if we reach target then the command is over
            this.triggerEndCallbacks();
            return {
                chain: [setPositionCmd],
                nextTick: []
            }
        } else {
            //if we need to go on we schedule another execution of the command
            return {
                chain: [setPositionCmd],
                nextTick: [this]
            }
        }
    }
}