import DS from 'ember-data';

export default DS.RESTAdapter.extend({
   host: 'https://api.github.com',
   headers: {
    Authorization: "token 6066d0be0a655f2b492e945fc3d23a1edb307d94" // replace!
  },
  updateRecord(store, type, snapshot) {
    const url = `${this.host}/user/starred/${snapshot.attr('fullName')}`;
    console.log(url);
    return this.ajax(url, "PUT", {});
  }

});
