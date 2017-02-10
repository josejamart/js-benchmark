import * as Backbone from 'backbone';
import {CategoryCollection} from './CategoryCollection';

export class AppWorkflowModel extends Backbone.Model {
    categories: CategoryCollection;
    constructor() {
        super();
        this.categories = new CategoryCollection();
    }
    setUp() {
        this.categories.fetch();
    }
    runTest() {

    }
}
