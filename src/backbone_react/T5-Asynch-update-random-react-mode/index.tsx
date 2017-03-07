import {RowCollection} from './models/RowCollection';
import * as $ from 'jquery';
import * as Backbone from 'backbone';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Configuration} from '../../benchmarkFramework/Config';
import App from "./containers/App";
import MutationModel from "../../benchmarkFramework/models/MutationModel";
import TestRouter from '../../benchmarkFramework/routers/TestRouter';

$(() => {
  // Initiate the router
  let app_router = new TestRouter({
    testExecutor: (testId: string, close: boolean, mutationModel: MutationModel) => {
    let cells = new RowCollection();
    let update1 = new RowCollection();
    update1.url = Configuration.URL_BASE + '/data/cellData_a1.json';
    let update2 = new RowCollection();
    update2.url = Configuration.URL_BASE + '/data/cellData_e2.json';
    let update3 = new RowCollection();
    update3.url = Configuration.URL_BASE + '/data/cellData_i3.json';
    let update4 = new RowCollection();
    update4.url = Configuration.URL_BASE + '/data/cellData_o4.json';
    let update5 = new RowCollection();
    update5.url = Configuration.URL_BASE + '/data/cellData_u5.json';

    cells.fetch({
      success:(collection1: any)=>{
        update1.fetch({
          success: () => {
            update2.fetch({
              success: () => {
                update3.fetch({
                  success: () => {
                    update4.fetch({
                      success: () => {
                        update5.fetch({
                          success: () => {
                            mutationModel.startRendering();

                            ReactDOM.render(<App rows={collection1} />, $(".app")[0]);
                            collection1.reset(update1.toJSON(),{parse:true});
                            collection1.reset(update2.toJSON(),{parse:true});
                            collection1.reset(update3.toJSON(),{parse:true});
                            collection1.reset(update4.toJSON(),{parse:true});
                            collection1.reset(update5.toJSON(),{parse:true});

                            mutationModel.endRendering();
                          }});
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      }
    );
  }
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

});
