import * as Backbone from 'backbone';
import {AppWorkflowModel} from '../models/AppWorkflowModel';
import * as _ from 'underscore';
import * as $ from 'jquery';
import * as moment from 'moment';
import {ResultItem} from '../models/ResultModel';

export class AppView extends Backbone.View<Backbone.Model>{
    workflow: AppWorkflowModel;
    executionId: string;
    idTest: number;
    constructor(options: any) {
        super(options);
        this.idTest = _.random(0, 100);
        this.executionId = "t-id-" + this.idTest;
        this.workflow = new AppWorkflowModel();
        this.listenTo(this.workflow.categories, "sync", this.startTests);
        var self = this;
        window.addEventListener('storage', function(e) {
            if (_.indexOf(e.key, self.executionId)) {
                let testId = e.key.split("_")[1];
                self.updateTextResult(testId, JSON.parse(e.newValue));
            }
        });
    }

    render() {
        this.$el.html("");
        return this;
    }

    openTest(urls: Array<string>,index: number){
      if(index < urls.length){
          let newWindow = window.open(urls[index]);
          let self = this;
          newWindow.onunload = function(e) {
            self.openTest(urls,index+1);
        };
      }
    }

    startTests() {
      let urls = [];
        this.$el.html("Starting test ... id: "+this.idTest);
        for (let category of this.workflow.categories.models) {
            this.$el.append("<h1 data-id='" + category.get("id") + "'>" + category.get("title") + "</h1>");
            for (let test of category.get("tests").models) {
                if (!_.isEmpty(test.get("url")) && test.get("enabled")) {
                    this.$el.append("<div style='margin-top:10px'><b>Identifier: </b></h5>");
                    this.$el.append("<div style='margin-left:10px'>" + test.get("naturalId") + " (" + test.get("id") + ")" + "</div>");
                    this.$el.append("<div><b>Description: </b></div>");
                    this.$el.append("<div style='margin-left:10px'>" + test.get("description") + "</div>");
                    this.$el.append("<div data-id='" + test.collection.categoryId + "-" + test.get("id") + "'></div><hr>");
                    urls.push(test.get("url") + "#" + this.executionId + "_" + test.collection.categoryId + "-" + test.get("id"));
                }
            }
        }
        this.openTest(urls,0);
    }

    updateTextResult(id: string, result: ResultItem) {
        let totalDduration = moment.duration(result.totalTime);
        let totalTime = totalDduration.get('minutes') + "m " + totalDduration.get('seconds') + "s " + totalDduration.get('milliseconds') + "ms";

        let renderDuration = moment.duration(result.renderTime);
        let renderTime = renderDuration.get('minutes') + "m " + renderDuration.get('seconds') + "s " + renderDuration.get('milliseconds') + "ms";

        var $container = $("<div>").html("<div><b>Results:</b></div>");
        var $totalTime = $("<div>").html("<div style='margin-left:10px'>Total time elapsed: <b>" + totalTime + " (" + result.totalTime + " ms)</b></div>");
        var $renderTime = $("<div>").html("<div style='margin-left:10px'>Number of muntations: <b>" + result.loopCount + "</b></div>");
        var $numMutations = $("<div>").html("<div style='margin-left:10px'>Rendering time elapsed: <b>" + renderTime + " (" + result.renderTime + " ms)</b></div>");
        $container.append($totalTime);
        $container.append($renderTime);
        $container.append($numMutations);
        this.$el.find("[data-id=" + id + "]").empty().append($container);
    }
}
