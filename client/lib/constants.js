// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Snich',
  DESCRIPTION: 'Share photos, videos, and sound bites anonymously via sms text message.'
};
