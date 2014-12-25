Template['albumActions'].events({
  'click .ui.album-actions .album-settings.button' : function () {
    // todo: toggle settings section by id
    Session.set('settingsActive', !Session.get('settingsActive'));
    Session.set('settingsShow', !Session.get('settingsShow'));
  }
});
