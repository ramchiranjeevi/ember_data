import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('user', 'ramchiranjeevi');
  },
  actions: {
     star(repo) {
       console.log('in user save');
       console.log(repo);
       repo.save();
     }
   }

});
