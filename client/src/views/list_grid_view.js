const PubSub = require('../helpers/pub_sub.js');
const ListingView = require('./list_view.js');

const ListingGridView = function (container) {
  this.container = container;
};

ListingGridView.prototype.bindEvents = function () {
PubSub.subscribe('Listings:data-loaded', (evt) => {
this.render(evt.detail);
});
};
ListingGridView.prototype.render = function (listings) {
this.container.innerHTML = '';
const listingView = new ListingView(this.container);
listings.forEach((listing) => listingView.render(listing));
};

module.exports = ListingGridView
