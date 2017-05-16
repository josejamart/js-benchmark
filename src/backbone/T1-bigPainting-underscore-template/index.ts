import * as $ from 'jquery';
import * as Backbone from 'backbone';
import {RowCollection} from './models/RowCollection';
import {CellPaintingView} from './views/CellPaintingView';
import MutationModel from "../../benchmarkFramework/models/MutationModel";
import TestRouter from '../../benchmarkFramework/routers/TestRouter';

$(() => {
  // Initiate the router
  let app_router = new TestRouter({
    testExecutor: (testId: string, close: boolean, mutationModel: MutationModel) => {
      let cells = new RowCollection();

      cells.fetch({
        success: (collection: any) => {
          mutationModel.startRendering();

          let app = new CellPaintingView({ el: $("#app"), data: collection });
          app.render();
          app.color = true;
          app.render();
          /*
                    for (let i = 0; i < 10; i++) {
                      var elements: any = document.getElementsByClassName("impar");
                      for (let i: number = 0; i < elements.length; i++) {
                        elements[i].style.color = "blue";
                      }
                      elements = null;

                      elements = document.getElementsByClassName("par");
                      for (let i: number = 0; i < elements.length; i++) {
                        elements[i].style.color = "blue";
                      }
                      elements = null;
                    }
          */
          mutationModel.endRendering();
        }
      });
    }
  });

  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start();

});
