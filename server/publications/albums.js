Meteor.publish('albums', function() {
  return Albums.find();
});

Meteor.publish('album', function(id) {
  check(id, String)
  return Albums.find(id);
});
