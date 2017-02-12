import {AppView} from '../../benchmarkFramework/views/AppView';
import * as Backbone from 'backbone';
import * as $ from 'jquery';
import * as _ from 'underscore';
import {RowCollection} from './models/RowCollection';
import {CellPaintingView} from './views/CellPaintingView';

interface Events extends Backbone.Events {
}

$(() => {
    let testId = window.location.hash.split('#')[1];
    let cells = new RowCollection();

    let evt: Backbone.Events = _.extend({}, Backbone.Events);

    evt.listenTo(cells, "sync", function(collection: any) {
        let loopCount = 1;
        let totalTime = 0;
        // Finally, we kick things off by creating the **App**.
        let startDate = new Date();

        let app = new CellPaintingView({ el: $(".app"), data: collection });
        app.render();
        //  $(".app").empty();
        app.rerender();
        let endDate = new Date();
        totalTime += endDate.getTime() - startDate.getTime();
        localStorage.setItem(testId, JSON.stringify({ "totalTime": totalTime, "loopCount": loopCount }));
        //window.close();
    });

    cells.fetch();

});
