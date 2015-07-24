import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      tag: 'kittens',
      pictures: Ember.A([]),
    })
  },

  setupController: function(controller, models) {
     controller.setProperties(models);
   }


});
