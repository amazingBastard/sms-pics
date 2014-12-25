Router.route('/', function () {
  this.render('home');
  SEO.set({ title: Meteor.App.NAME });
}, {
  name: 'home',
  waitOn: function () {
    return Meteor.subscribe('albums');
  },
  action: function () {
    if (this.ready())
      this.render('home');
    else
      this.render('loading');
  }
});

Router.route('/albums/:_id', {
  name: 'album',
  data: function() {
    return Albums.findOne({_id: this.params._id});
  },
  waitOn: function() {
    return Meteor.subscribe('albums');
  },
  action: function() {
    if (this.ready())
      this.render('album')
    else
      this.render('loading');
  }
});

Router.onBeforeAction('dataNotFound', {only: 'album'});
