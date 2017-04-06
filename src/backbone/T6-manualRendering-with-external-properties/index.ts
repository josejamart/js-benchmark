import * as $ from 'jquery';
import * as Backbone from 'backbone';
import MutationModel from "../../benchmarkFramework/models/MutationModel";
import TestRouter from "../../benchmarkFramework/routers/TestRouter";
import {PaintingView} from "./views/PaintingView";

$(() => {

  // Initiate the router
  let app_router = new TestRouter({
    testExecutor : (testId: string, close: boolean, mutationModel :MutationModel)=>{
          // Start traking rendering time
          mutationModel.startRendering();

          // Create and render the view
          let app = new PaintingView({ el: $(".app")});
          app.render();

          // Stop traking rendering data.
          mutationModel.endRendering();
    }
  });

  // Start navigation
  Backbone.history.start();
});
