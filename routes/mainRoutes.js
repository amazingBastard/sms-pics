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
