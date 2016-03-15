import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  //  return this.store.query('files', {authtoken: fe1672594f2ca90f6ec3a84e03537303} );
    return this.store.query('files', { authtoken: 'fe1672594f2ca90f6ec3a84e03537303', scope: 'docsapi' });
  },
  serializeQueryParam(value, urlKey, defaultValueType){
    console.log(value);
    console.log(urlKey);
    console.log(defaultValueType);
  }
});
