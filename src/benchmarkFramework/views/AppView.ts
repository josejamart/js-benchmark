import * as Backbone from 'backbone';
import {AppWorkflowModel} from '../models/AppWorkflowModel';
import * as _ from 'underscore';
import * as $ from 'jquery';
import * as moment from 'moment';
import {ResultItem} from '../models/ResultModel';

export class AppView extends Backbone.View<Backbone.Model>{
    workflow: AppWorkflowModel;
    template: (data: any) => string;
    constructor(options: any) {
        super(options);
        this.template = _.template($('#result-template').html());

        this.workflow = new AppWorkflowModel();
        this.listenTo(this.workflow.categories, "sync", this.startTests);
        var self = this;
        window.addEventListener('storage', function(e) {
            if (_.indexOf(e.key, self.workflow.executionId)) {
                let testId = e.key.split("_")[1];
                self.updateTextResult(testId, JSON.parse(e.newValue));
            }
        });
    }

    render() {
        this.$el.html("");
        return this;
    }

    startTests() {
      let urls = [];
        this.$el.html("Starting test ... id: "+this.workflow.idTest);
        for (let category of this.workflow.categories.models) {
            this.$el.append("<h1 data-id='" + category.get("id") + "'>" + category.get("title") + "</h1>");
            for (let test of category.get("tests").models) {
                if (!_.isEmpty(test.get("url")) && test.get("enabled")) {
                    this.$el.append("<div style='margin-top:10px'><b>Identifier: </b></h5>");
                    this.$el.append("<div style='margin-left:10px'>" + test.get("naturalId") + " (" + category.get("id") + "-" + test.get("id") + ")" + "</div>");
                    this.$el.append("<div><b>Description: </b></div>");
                    this.$el.append("<div style='margin-left:10px'>" + test.get("description") + "</div>");
                    this.$el.append("<div data-id='" + test.collection.categoryId + "-" + test.get("id") + "'><span style='color:red;'>Non executed</span></div><hr>");
                }
            }
        }
        let self = this;
        setTimeout(()=>{
          self.workflow.openTests();
        },1);
    }

    updateTextResult(id: string, result: ResultItem) {
        let totalDduration = moment.duration(result.totalTime);
        let totalTime = totalDduration.get('minutes') + "m " + totalDduration.get('seconds') + "s " + totalDduration.get('milliseconds') + "ms";

        let renderDuration = moment.duration(result.renderTime);
        let renderTime = renderDuration.get('minutes') + "m " + renderDuration.get('seconds') + "s " + renderDuration.get('milliseconds') + "ms";


        this.$el.find("[data-id=" + id + "]").empty().append(this.template({totalTime: totalTime, renderTime: renderTime, result: result}));
    }
}
