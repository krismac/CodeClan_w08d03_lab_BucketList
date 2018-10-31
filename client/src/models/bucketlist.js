const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const List = function (url) {
  this.url = 'http://localhost:3000/api/list';
  this.request = new RequestHelper(this.url);
};

List.prototype.bindEvents = function () {
  PubSub.subscribe('ListView:delete', (evt) => {
    this.deleteList(evt.detail);
  });

  PubSub.subscribe('ListView:submitted', (evt) =>{
    this.postListing(evt.detail);
  })
};

List.prototype.postListing = function (listing){
  const request = new RequestHelper(this.url);
  request.post(listing)
  .then((listings) =>{
    PubSub.publish('Listings:data-loaded', listings)
  })
  .catch(console.error);
};

List.prototype.getData = function () {
  this.request.get()
    .then((listings) => {
      PubSub.publish('Listings:data-loaded', listings)
    })
    .catch(console.error);
};

List.prototype.deleteListing = function (listingId){
  this.request.delete(listingId)
  .then((listings) => {
    PubSub.publish('Listings:data-loaded', listings);
  })
  .catch(console.error);
};

module.exports = List;
