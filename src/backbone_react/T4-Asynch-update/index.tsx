import {RowCollection} from './models/RowCollection';
import * as $ from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Configuration} from '../../benchmarkFramework/Config';
import App from "./containers/App";
import MutationModel from "../../benchmarkFramework/models/MutationModel";


$(() => {
    let testId = window.location.hash.split('#')[1];
    let cells = new RowCollection();
    let cells1 = new RowCollection();
    cells1.url = Configuration.URL_BASE + '/data/cellData_1.json';

    let mutationModel = new MutationModel();
    mutationModel.startListening(testId, true);

    cells.fetch({
      success:(collection1: any)=>{
          cells1.fetch({success:(collection2: any)=>{
            mutationModel.startRenderTime = new Date();

            ReactDOM.render(<App rows={collection1} />, $(".app")[0]);;

            collection1.set(cells1.toJSON(),{parse:true});

            mutationModel.registerTime(testId);
          }});

        }
      }
    );

});
