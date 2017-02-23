import * as $ from 'jquery';
import {RowCollection} from './models/RowCollection';
import {CellPaintingView} from './views/CellPaintingView';
import MutationModel from "../../benchmarkFramework/models/MutationModel";

$(() => {
    let testId = window.location.hash.split('#')[1];
    let cells = new RowCollection();

    let mutationModel = new MutationModel();
    mutationModel.startListening(testId);

    cells.fetch({
      success: (collection: any) => {
          mutationModel.startRenderTime = new Date();

          let app = new CellPaintingView({ el: $(".app"), data: collection });
          app.render();

          mutationModel.registerTime(testId);
      }
    });

});
