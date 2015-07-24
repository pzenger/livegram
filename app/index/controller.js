import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {
    getPictures: function() {
      let self = this;
      Ember.$.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "https://api.instagram.com/v1/tags/" + self.get('tag') + "/media/recent?client_id=2172319fa6924d6ea3f5b80f260e5703&callback=callbackFunction",
        success: function(data) {
          self.set('pictures', data.data);
        }
      });
    }
  }
});
