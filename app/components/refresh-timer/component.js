import Ember from 'ember';

export default Ember.Component.extend({

  timeSeconds: 60,
  timeLeft: 60,
  percentDone: 0,
  interval: null,

  // Start an interval
  didInsertElement: function() {
    let self = this;
    let _interval = null;

    this.set('timeLeft', this.get('timeSeconds'));
    _interval = setInterval(function() {
      self.set('timeLeft', self.get('timeLeft') - 1);
    }, 1 * 1000);

    this.set('interval', _interval);
  },

  // Update when time left is 0
  updateImages: function(){

    if(this.get('timeLeft') <= 0) {
      this.attrs.timeAction();
      this.set('timeLeft', this.get('timeSeconds'));
    } else {
      this.set('percentDone', ((this.get('timeSeconds') - this.get('timeLeft') + 1) / this.get('timeSeconds')) * 100);
    }
  }.observes('timeLeft')

  //Something to update and restart the interval

});
