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
  const newSighting = this.createListing(evt.target);
  PubSub.publish('ListView:submitted', newListing);
  evt.target.reset();
};
