const PubSub = require('../helpers/pub_sub.js')

const ListingFormView = function (form) {
  this.form = form;
};

ListingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

ListingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newListing = this.createListing(evt.target);
  PubSub.publish('ListView:submitted', newListing);
  evt.target.reset();
};

ListingFormView.prototype.handleEdit = function (evt) {
  evt.preventDefault();
  const editListing = this.updateListing(evt.target);
  PubSub.publish('ListView:edit', editListing);
  evt.target.reset();
};

ListingFormView.prototype.createListing = function (form) {
  const newListing = {
    item: form.item.value,
    status: form.status.value
  }
  return newListing;
};

module.exports = ListingFormView
