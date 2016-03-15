import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
   host: 'https://apidocs.zoho.com',
   namespace: 'files/v1'
});
