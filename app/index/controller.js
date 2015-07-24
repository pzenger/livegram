import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    setTag(newTag) {
      console.log('Set tag called')
      // console.log(newTag)
      // let oldTag = this.get('tag');
      // console.log(oldTag)

    }
  }
});
