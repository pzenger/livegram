import Ember from 'ember';

export default Ember.Component.extend({
  tag: null,

  actions: {
    fetch: function() {
      console.log('fetch called')
      // this.attrs.submit(this.get('tag'));
    }
  }
});