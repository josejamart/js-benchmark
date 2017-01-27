import * as Backbone from 'backbone';
import * as Configuration from '../../Config';
import * as CellModel from './CellModel';

class CellCollection extends Backbone.Model{
  url = Configuration.URL_BASE + '/Backbone/cellPainting/cellData.json';
  model = CellModel;
}
