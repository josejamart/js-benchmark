import * as Backbone from 'backbone';
import * as _ from 'underscore';
import * as $ from 'jquery';
import './styles.css';

export class BlockView extends Backbone.View<Backbone.Model>{
  	firstHidden: boolean;
  	toogleSecond: boolean;
  	swapElement: boolean;
    template: (data: any) => string;
    constructor(options?: any) {
        super(options);
        this.template = _.template($('#block-template').html());
        this.firstHidden = false;
        this.toogleSecond = false;
        this.swapElement = false;
    }
    firstClick(){
      this.firstHidden = !this.firstHidden;
      this.render();
    }
    secondClick(){
      this.toogleSecond = !this.toogleSecond;
      this.render();
    }
    thirdClick(){
      this.swapElement = !this.swapElement;
      this.render();
    }
    render() {
      var obj = {
        	firstHidden: this.firstHidden,
        	toogleSecond: this.toogleSecond,
        	swapElement: this.swapElement
      }
        this.$el.html(this.template(obj));
        return this;
    }
}
