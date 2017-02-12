import * as Backbone from 'backbone';
import {CategoryModel} from './CategoryModel';
import {Configuration} from '../Config';

export class CategoryCollection extends Backbone.Collection<CategoryModel> {
    url = Configuration.URL_BASE + '/data/tests.json';
    model = CategoryModel;
}
