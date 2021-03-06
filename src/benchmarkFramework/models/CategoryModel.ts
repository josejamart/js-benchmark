import * as Backbone from 'backbone';

export class CategoryModel extends Backbone.Model {
    parse(response: any) {
        response.tests = new Backbone.Collection(response.tests);
        response.tests.categoryId = response.id;
        return response;
    }
}
