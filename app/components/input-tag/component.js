import Ember from 'ember';

export default Ember.Component.extend({
  tag: null,

  click() {
    this.attrs.submit(this.get('tag'));
  }

});
