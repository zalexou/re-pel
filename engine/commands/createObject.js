/**
 * Created by alex on 23/04/2017.
 */
class CreateObjectCmd extends Command {
    constructor(objectClass, options) {
        super();
        this.objectClass = objectClass;
        this.options = options;
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
        return null;
    }
}