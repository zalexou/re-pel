/**
 * Created by alex on 28/04/2017.
 */
class FollowPathCmd extends Command {
    constructor(object, points, velocity, options) {
        super();
        this.object = object;
        this.points = points || [];
        this.velocity = velocity;
        this.currentMovement = null;
        this.pointsIndex = 0;
        this.target = this.points[this.pointsIndex];
        this.onWaypointReachedCallback = _.get(options, 'onWaypointReached', null);
        this.onDestinationReachedCallback = _.get(options, 'onDestinationReached', null);
    }

    nextTarget() {
        if (!this.points[this.pointsIndex + 1]) {
            return null;
        } else {
            this.pointsIndex++;
            return this.points[this.pointsIndex];
        }
    }

    waypointReached() {
        this.onWaypointReachedCallback && this.onWaypointReachedCallback(this.target);
        this.currentMovement = null;
        this.target = this.nextTarget();
    }

    execute(controller, timeOffset) {
        if (!this.currentMovement) {
            if (!this.target) {
                //if we're out of target we're done
                this.onDestinationReachedCallback && this.onDestinationReachedCallback();
                this.triggerEndCallbacks();
                return {
                    chain: [],
                    next: []
                }
            } else {
                //we have a new target, we go on
                this.currentMovement = new MoveToCmd(this.object, this.target, this.velocity);
                this.currentMovement.registerEndCallback(() => {
                    this.waypointReached();
                });

                return {
                    chain: [this.currentMovement],
                    nextTick: [this]
                }
            }
        } else {
            //We have an ongoing movement so we just push this command to keep going
            return {
                chain: [],
                nextTick: [this]
            }
        }

    }
}