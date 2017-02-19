import * as Backbone from 'backbone';
import {RowCollection} from './models/RowCollection';
import {CellPaintingView} from './views/CellPaintingView';
import * as _ from 'underscore';
import * as $ from 'jquery';

interface Events extends Backbone.Events {
}

$(() => {
    let testId = window.location.hash.split('#')[1];
    let cells = new RowCollection();


    cells.fetch({
      success:(collection: any)=>{
          let loopCount = 1;
          let totalTime = 0;

          let startDate = new Date();

          let app = new CellPaintingView({ el: $(".app"), data: collection });
          app.render();

          let endDate = new Date();
          totalTime += endDate.getTime() - startDate.getTime();
          localStorage.setItem(testId, JSON.stringify({ "totalTime": totalTime, "loopCount": loopCount }));
          window.close();
        }
      }
    );

});
