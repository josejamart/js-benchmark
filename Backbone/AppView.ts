import * as Backbone from 'backbone';

export class AppView extends Backbone.View<Backbone.Model>{

  render(){
    this.$el.html("hola");
    return this;
  }
}
