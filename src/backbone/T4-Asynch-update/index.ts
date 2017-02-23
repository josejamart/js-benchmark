import * as $ from 'jquery';
import {Configuration} from '../../benchmarkFramework/Config';
import {RowCollection} from './models/RowCollection';
import {CellPaintingView} from './views/CellPaintingView';
import MutationModel from "../../benchmarkFramework/models/MutationModel";

$(() => {
  let testId = window.location.hash.split('#')[1];
  let cells = new RowCollection();
  let cells1 = new RowCollection();
  cells1.url = Configuration.URL_BASE + '/data/cellData_1.json';

  let mutationModel = new MutationModel();
  mutationModel.startListening(testId);

  cells.fetch({
    success: (collection1: any) => {
      cells1.fetch({
        success: (collection2: any) => {
          // Finally, we kick things off by creating the **App**.
          mutationModel.startRenderTime = new Date();

          let app = new CellPaintingView({ el: $(".app"), data: collection1 });
          app.render();

          collection1.set(cells1.toJSON(), { parse: true });

          mutationModel.registerTime(testId);
        }
      });
    }
  });

});
