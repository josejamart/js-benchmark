import * as Backbone from 'backbone';
import {Configuration} from '../../Config';
import {CellModel} from './CellModel';

export class CellCollection extends Backbone.Collection<CellModel>{
  url = Configuration.URL_BASE + '/Backbone/cellPainting/cellData.json';
}
