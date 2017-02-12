import * as Backbone from 'backbone';
import {Configuration} from '../Config';
import {TestModel} from './TestModel';

export class TestCollection extends Backbone.Collection<TestModel>{
    model = TestModel;
}
