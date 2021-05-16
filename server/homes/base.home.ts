import * as _ from "lodash";

class Home {
    model: Model;

    constructor(model: Model) {
        this.model = model;
    }

    get(skip: Number, limit: Number) {
        return this.model
            .find()
            .skip(skip)
            .limit(limit);
    }

    getOneById(_id) {
        return this.model.findOne({ _id });
    }

    insert(document) {
        this.model.insertMany([_.assign({ _id }, document)]);
    }

    remove(_id) {
        return this.model.deleteOne({ _id });
    }
}
export default Home;
