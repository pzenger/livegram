import Ember from 'ember';

export default Ember.Component.extend({

  timeSeconds: 60,
  timeLeft: 60,
  interval: null,

  didInsertElement: function() {
    // TODO:  Set an interval passed in.
    let self = this;
    let _interval = null;
    // var interval;

    console.log('setting interval')
    console.log(this.get('timeSeconds '))
    this.set('timeLeft', this.get('timeSeconds'))

    _interval = setInterval(function() {
      self.set('timeLeft', self.get('timeLeft') - 1);
      // self.attrs.timeAction();
    }, self.get('timeSeconds') * 1000);

    this.set('interval', _interval);
  },

  //   actions: {
  //   fetch: function() {
  //     console.log('fetch called')
  //     this.attrs.timeAction();
  //   }
  // }
});
