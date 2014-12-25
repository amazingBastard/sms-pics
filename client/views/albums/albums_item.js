Template.albumsItem.rendered = function() {
  Session.set('settingsActive', false);
  Session.set('settingsShow', false);
};

Template['albumsItem'].helpers({
  settingsShow: function() {
    return Session.get('settingsShow');
  }
});
