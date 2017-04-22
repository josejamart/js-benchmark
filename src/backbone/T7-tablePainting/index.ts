import * as $ from 'jquery';
import * as Backbone from 'backbone';
import {RowCollection} from './models/RowCollection';
import {CellPaintingView} from './views/CellPaintingView';
import MutationModel from "../../benchmarkFramework/models/MutationModel";
import TestRouter from "../../benchmarkFramework/routers/TestRouter";
import {Configuration} from '../../benchmarkFramework/Config';
import {ButtonsView} from './views/ButtonsView';

$(() => {

  // Initiate the router
  let app_router = new TestRouter({
    testExecutor : (testId: string, close: boolean, mutationModel :MutationModel)=>{
      // Create data collection
      let cells = new RowCollection();
      let update1 = new RowCollection();
      update1.url = Configuration.URL_BASE + '/data/tableData-2.json';

      // Get data from server
      cells.fetch({
        success: (collection: any) => {
          // Get data from server
          update1.fetch({
            success: (update: any) => {
          // Start traking rendering time
          mutationModel.startRendering();
          let originalCollection = collection.toJSON();
          // Create and render the view
          let btn = new ButtonsView({ el: $(".buttons"),
            onFirstClick : () => {
              collection.reset(originalCollection, { parse: true });
            },
            onSecondClick :  () => {
              collection.reset(update.toJSON(), { parse: true });
            }
          });
          btn.render();
          // Create and render the view
          let app = new CellPaintingView({ el: $(".app"), data: collection });
          app.render();
          // Stop traking rendering data.
          mutationModel.endRendering();
        }
      });
      }
    });
    }
  });

  // Start navigation
  Backbone.history.start();
});
