import * as Backbone from 'backbone';
import {Configuration} from '../../../benchmarkFramework/Config';
import {RowModel} from './RowModel';

export class RowCollection extends Backbone.Collection<RowModel>{
    url = Configuration.URL_BASE + '/data/cellData.json';
    model = RowModel;
}
