Meteor.publish('albums', function() {
  return Albums.find();
});
