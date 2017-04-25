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

        var targetDist = this.distanceToTarget(point, target);
        var ratio = targetDist / velocity;

        var H = target.y - point.y;
        var h = H / ratio;

        var L = target.x - point.x;
        var l = L / ratio;

        var nextCoordinates = {
            x: point.x + l,
            y: point.y + h
        };

        return nextCoordinates;
    }

    distanceToTarget() {
        return Math.hypot(this.destination.x - this.object.x, this.destination.y - this.object.y);
    }

    execute(controller, timeDelta) {
        var distancePx = (this.velocity / 1000) * timeDelta;
        var nextCoordinates = this.getNextCoordinates(distancePx);
        console.log('Moving ', this.object);
        console.log('to ', nextCoordinates);
        //TODO Send two new commands; move and push myself
        let setPositionCmd = new SetPositionCmd(this.object, nextCoordinates);
        return [setPositionCmd, this];
    }
}