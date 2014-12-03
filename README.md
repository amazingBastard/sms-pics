# Live Social Playlist

This app allows users to create their own live music streaming sessions or join other channels and interact with the DJ through chat.

<!-- toc -->

* [Developer's Guide](#developers-guide)
  * [How to use](#how-to-use)
  * [Deployments](#deployments)
  * [SEO and other concerns](#seo-and-other-concerns)
  * [Adding allow rules for external URLs](#adding-allow-rules-for-external-urls)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [Other Awesome Boilerplates](#other-awesome-boilerplates)
* [License](#license)

<!-- toc stop -->

View the demo here: [dj.meteor.com](http://dj.meteor.com).

## Developper's Guide

```sh
# Assuming meteor is already installed
cd mtr-dj && meteor
```

This will run a local meteor server.

### How to use

```sh
# Assuming meteor is already installed
orion create appName
cd appName && meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

The Meteor-Up config can be found in *private/cli/mup*

### SEO and other concerns

> Meteor can not do SEO

This statement is only partially true, since there is a package called [ms-seo](https://github.com/DerMambo/ms-seo), which
has a lot of neat little tricks to help web crawlers notice your app the way you want them to. You can also add constants under
__client/lib/constants.js__ for the app. Change SEO settings in the routes like that.

```javascript
Router.route('/about', function () {
  this.render('about');
  // Using the app constants
  SEO.set({ title: 'About -' + Meteor.App.NAME, og: {...} });
});
```

### Adding allow rules for external URLs

The [browser-policy](https://atmospherejs.com/meteor/browser-policy) adds rules to deny all operations from external URLs.
This helps dealing with clickjacking and other XSS methods used to attack the client. To whitelist a url, add following to
__server/config/security.js__

```javascript
BrowserPolicy.content.allowOriginForAll(YOUR_URL);
```

Other security enforcing packages like [audit-argument-checks](https://docs.meteor.com/#/full/auditargumentchecks) and
[matteodem:easy-security](https://github.com/matteodem/meteor-easy-security) have also been added.

## Structure

### Packages used

* Meteor Core
  * standard-app-packages
* Routing
  * iron:router
  * zimme:iron-router-active
* Collections
  * aldeed:collection2
  * dburles:collection-helpers
* Accounts
  * accounts-password
  * useraccounts:semantic-ui
* UI and UX
  * fastclick
  * meteorhacks:fast-render
  * natestrauser:animate-css
  * nooitaf:semantic-ui-less
* Security
  * browser-policy
  * audit-argument-checks
  * matteodem:easy-security
* SEO
  * manuelschoebel:ms-seo
* Development
  * less
  * jquery
  * underscore
  * raix:handlebar-helpers

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/ 				# Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
	lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    modules/            # Meant for components, such as form and more(*)
	views/			    # Contains all views(*)
	    common/         # General purpose html templates
model/  				# Model files, for each Meteor.Collection(*)
private/                # Private files
public/                 # Public files
routes/                 # All routes(*)
server/					# Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications(*)
    startup/            # On server startup
tests/          # Tests folder
meteor-boilerplate		# Command line tool
```

(*) = the command line tool creates files in these folders

## License
This project is NOT free for use and has been licensed, see the LICENSE.txt for more information.
