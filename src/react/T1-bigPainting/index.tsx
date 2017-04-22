import * as $ from 'jquery';
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Backbone from 'backbone';
import MutationModel from "../../benchmarkFramework/models/MutationModel";
import TestRouter from '../../benchmarkFramework/routers/TestRouter';

import App from "./containers/App";

$(() => {
  // Initiate the router
  let app_router = new TestRouter({
    testExecutor: (testId: string, close: boolean, mutationModel: MutationModel) => {

      mutationModel.startRendering();

      const render = (Component: any) => {
        ReactDOM.render(
          <App />,
          // HTML root element for React app
          document.getElementById("app")
        );
      };
      render(App);

      mutationModel.endRendering();
    }
  });

  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start();


});





