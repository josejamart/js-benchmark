import * as $ from 'jquery';
import * as Backbone from 'backbone';
import {RowCollection} from './models/RowCollection';
import {CellPaintingView} from './views/CellPaintingView';
import MutationModel from "../../benchmarkFramework/models/MutationModel";
import TestRouter from "../../benchmarkFramework/routers/TestRouter";

$(() => {

  // Initiate the router
  let app_router = new TestRouter({
    testExecutor: (testId: string, close: boolean, mutationModel: MutationModel) => {
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
          //app.render();
          //app.render();
          //app.render();
          //app.render();

          for (let i = 0; i < 10; i++) {
            /*
            //$("span.impar,span.par").style.color = "blue";;//.css("color", "blue");
            //$(".impar").style.color = "red";;//.css("color", "red");
            //$("span.impar,span.par").each(function(e, t: any) { t.style.color = "blue" });

                        var elements: any = $("span.impar,span.par");
                        let size = elements.size();
                        for (let i: number = 0; i < size; i++) {
                          elements.get(i).style.color = "blue";
                        }
                        elements = null;
          */
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


          // Stop traking rendering data.
          mutationModel.endRendering();
        }
      });
    }
  });

  // Start navigation
  Backbone.history.start();
});
