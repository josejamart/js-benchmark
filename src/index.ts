import {AppView} from './benchmarkFramework/views/AppView';
import * as $ from 'jquery';
import * as _ from 'underscore';
import * as Backbone from "backbone";

$(() => {

  class AppRouter extends Backbone.Router {

    constructor(options?: Backbone.RouterOptions) {
      super();
      this.route("(close=:closeWindow)(/ids=:ids)", "go");
    }
    go(closeWindow: string, ids: string) {
      let close = JSON.parse(closeWindow);
      if(!_.isBoolean(close)){
        close = true;
      }
      if(ids === null){
        ids = "";
      }
      let app = new AppView({ el: $(".app") });
      app.workflow.setUp(close,_.compact(ids.split(",")));
      app.render();
    }

  };
  // Initiate the router
  let app_router = new AppRouter();

  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start();
});
