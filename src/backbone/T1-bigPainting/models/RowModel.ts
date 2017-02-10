import * as Backbone from 'backbone';
import {CellCollection} from './CellCollection';

export class RowModel extends Backbone.Model {
    parse(response) {
        response.cells = new CellCollection(response.cells, { parse: true });
        return response;
    }
}
