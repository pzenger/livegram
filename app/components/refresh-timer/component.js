import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {
    // TODO:  Set an interval passed in.
  },

  // update: re-set interval

  actions: {
    fetch: function() {
      console.log('fetch called')
      this.attrs.timeAction();
    }
  }
});
