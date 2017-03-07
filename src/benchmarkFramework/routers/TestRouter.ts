import * as Backbone from 'backbone';
import * as _ from 'underscore';
import MutationModel from '../models/MutationModel';

export interface TestRouterOptions extends Backbone.RouterOptions{
  testExecutor: any;
}

export default class TestRouter extends Backbone.Router {
  testExecutor: any;
  mutationModel: MutationModel;
  constructor(options?: any) {
    super();
    this.route(":idTest(/close=:close)", "go");
    if(options.testExecutor){
      this.testExecutor = options.testExecutor;
    }
  }
  go(idTest: string, closeWindow: string) {
    let close = JSON.parse(closeWindow);
    if(!_.isBoolean(close)){
      close = true;
    }

    this.mutationModel = new MutationModel(idTest,close);
    this.mutationModel.startListening();
    this.testExecutor(idTest,close,this.mutationModel);
  }

};
