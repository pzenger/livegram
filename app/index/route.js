import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      tag: 'Cat',
      pictures: Ember.A([]),
      refreshTime: 10,
    });
  },

  setupController: function(controller, models) {
     controller.setProperties(models);
   }


});
