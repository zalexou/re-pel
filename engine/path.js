/**
 * Created by azalio on 21/04/2017.
 */
class Path {
    constructor() {
        this.points = [];
    }

    getNextPosition(point, targetPoint, velocity) {
        //Thales
        let targetDist = this.getDistance(point, targetPoint);
        let ratio = targetDist / velocity;

        let H = target.y - point.y;
        let h = H / ratio;

        let L = target.x - point.x;
        let l = L / ratio;

        let nextCoordinates = {
            x: point.x + l,
            y: point.y + h
        };

        return nextCoordinates;
    }

    getDistance(pointA, pointB) {
        return Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);
    }

    addCheckpoint(point) {
        this.points.push(point);
    }

    reroute(point) {
        this.points = [point];
    }
}