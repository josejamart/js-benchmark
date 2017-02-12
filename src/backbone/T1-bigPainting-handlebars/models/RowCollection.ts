import * as Backbone from 'backbone';
import {Configuration} from '../../../app/Config';

export class RowCollection extends Backbone.Collection<Backbone.Model>{
    url = Configuration.URL_BASE + '/data/cellData.json';
}
