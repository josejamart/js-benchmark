import * as Backbone from 'backbone';
import {CategoryCollection} from './CategoryCollection';

export class TestModel extends Backbone.Model {
    parse(response) {
        response.categories = new CategoryCollection(response.categories);
        return response;
    }
}
