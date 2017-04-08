import * as Backbone from 'backbone';

export class RowModel extends Backbone.Model {
    parse(response: any) {
        return response;
    }
}
