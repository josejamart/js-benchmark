import * as $ from 'jquery';
import * as Backbone from 'backbone';
import {RowCollection} from './models/RowCollection';
import {CellPaintingView} from './views/CellPaintingView';
import MutationModel from "../../benchmarkFramework/models/MutationModel";
import TestRouter from "../../benchmarkFramework/routers/TestRouter";

$(() => {

  // Initiate the router
  let app_router = new TestRouter({
    testExecutor : (testId: string, close: boolean, mutationModel :MutationModel)=>{
      // Create data collection
      let cells = new RowCollection();

      // Get data from server
      cells.fetch({
        success: (collection: any) => {
          // Start traking rendering time
          mutationModel.startRendering();

          // Create and render the view
          let app = new CellPaintingView({ el: $(".app"), data: collection });
          app.render();

          // Stop traking rendering data.
          mutationModel.endRendering();
        }
      });
    }
  });

  // Start navigation
  Backbone.history.start();
});
