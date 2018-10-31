use bucketlist;
db.dropDatabase();

db.list.insertMany([
  {
    item: "Bungee Jump",
    status: "Completed"
  },
  {
    item: "Swim with sharks",
    status: "Active"
  },
  {
    item: "Walk the Great Wall",
    status: "Removed"
  }
]);
