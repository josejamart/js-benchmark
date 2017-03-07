import * as $ from 'jquery';
import * as Backbone from 'backbone';
import {Configuration} from '../../benchmarkFramework/Config';
import {RowCollection} from './models/RowCollection';
import {CellPaintingView} from './views/CellPaintingView';
import MutationModel from "../../benchmarkFramework/models/MutationModel";
import TestRouter from '../../benchmarkFramework/routers/TestRouter';

$(() => {
  // Initiate the router
  let app_router = new TestRouter({
    testExecutor: (testId: string, close: boolean, mutationModel: MutationModel) => {
      let cells = new RowCollection();
      let cells1 = new RowCollection();
      cells1.url = Configuration.URL_BASE + '/data/cellData_1.json';

      cells.fetch({
        success: (collection1: any) => {
          cells1.fetch({
            success: (collection2: any) => {
              mutationModel.startRendering();

              let app = new CellPaintingView({ el: $(".app"), data: collection1 });
              app.render();

              collection1.set(cells1.toJSON(), { parse: true });

              mutationModel.endRendering();
            }
          });
        }
      });
    }
  });

  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start();

});
