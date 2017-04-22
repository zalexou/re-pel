/**
 * Created by alex on 22/04/2017.
 */
class RepelController{
    constructor(engine) {
        this.engine = engine;
    }

    addObject(object) {
        engine.objects.push(object);
        return object.guid;
    }
}