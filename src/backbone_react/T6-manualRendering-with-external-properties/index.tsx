import {PaintingView} from './views/PaintingView';
import * as $ from 'jquery';
import * as Backbone from 'backbone';
import MutationModel from "../../benchmarkFramework/models/MutationModel";
import TestRouter from '../../benchmarkFramework/routers/TestRouter';

$(() => {
  // Initiate the router
  let app_router = new TestRouter({
    testExecutor: (testId: string, close: boolean, mutationModel: MutationModel) => {

      mutationModel.startRendering();

      let app = new PaintingView({ el: $(".app") });
      app.render();

      mutationModel.endRendering();

      }
  });

  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start();

});
