/**
 * Created by alex on 23/04/2017.
 */
class CreateObjectCmd extends Command {
    constructor(objectClass, options, callback) {
        super();
        this.objectClass = objectClass;
        this.options = options;
        this.callback = callback;
    }

    execute(controller) {
        let newObj = null;
        switch (this.objectClass) {
            case 'Quadrilateral':
                newObj = new Quadrilateral(this.options);
                break;
            case 'Circle':
                newObj = new Circle(this.options);
                break;
        }
        controller.addObject(newObj);
        this.callback && this.callback(newObj);
        return null;
    }
}