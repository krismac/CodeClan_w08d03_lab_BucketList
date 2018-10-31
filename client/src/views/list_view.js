const PubSub = require('../helpers/pub_sub.js');

const ListView = function (container) {
  this.container = container;
};

ListView.prototype.render = function (listing) {
  const listingContainer = document.createElement('div');
  listingContainer.id = 'listing';

  const item = this.createItem(`List item: ${listing.item}`);
  listingContainer.appendChild(item);

  const itemStatus = this.createItemStatus(`Status: ${listing.status}`);
  listingContainer.appendChild(itemStatus);

  const deleteButton = this.createDeleteButton(listing._id);
  listingContainer.appendChild(deleteButton);

  const editButton = this.createEditButton(listing._id);
  listingContainer.appendChild(editButton);

  this.container.appendChild(listingContainer);
};

ListView.prototype.createItem = function (textContent) {
  const itemName = document.createElement('p');
  itemName.textContent = textContent;
  return itemName;
};

ListView.prototype.createItemStatus = function (textContent) {
  const itemStatus = document.createElement('p');
  itemStatus.textContent = textContent;
  return itemStatus;
};

ListView.prototype.createDeleteButton = function (listingId) {
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
deleteButton.value = listingId;

  deleteButton.addEventListener('click', (evt) => {
    PubSub.publish('ListView:delete', evt.target.value);
  });

  return deleteButton;
};

ListView.prototype.createEditButton = function (listingId) {
  const editButton = document.createElement('button');
  editButton.classList.add('edit-btn');
  editButton.value = listingId;

  editButton.addEventListener('click', (evt) => {
    PubSub.publish('ListView:edit', evt.target.value);
  });

  return editButton;
};

module.exports = ListView
