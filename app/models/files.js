import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  res_type: DS.attr('string')
});
