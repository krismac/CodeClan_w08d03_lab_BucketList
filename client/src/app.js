const ListingFormView = require('./views/list_form_view.js')
const ListingGridView = require('./views/list_grid_view.js');
const BucketList = require('./models/bucketlist.js');

document.addEventListener('DOMContentLoaded', () => {
  const listingsForm = document.querySelector('form#listings-form');
  const listingsFormView = new ListingFormView(listingsForm);
  listingsFormView.bindEvents();

  const listingsContainer = document.querySelector('div#listings');
  const listingsGridView = new ListingGridView(listingsContainer);
  sightingsGridView.bindEvents();

  const listings = new BucketList();
  listings.bindEvents();
  listings.getData();
});
