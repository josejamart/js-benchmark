import * as Backbone from 'backbone';
import {CellCollection} from './CellCollection';

export class RowModel extends Backbone.Model {
    parse(response: any) {
        if(this.get("cells") instanceof CellCollection){
          this.get("cells").set(response.cells, { parse: true });
		  delete response.cells;
        }else{
          response.cells = new CellCollection(response.cells, { parse: true });
        }
        return response;
    }
    toJSON(){
      let result = super.toJSON();
      result.cells = this.get("cells").toJSON();
      return result;
    }
}
