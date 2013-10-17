Package.describe({
  summary: "Extends Meteor.Collection with behaviour patterns using CollectionHooks"
});

var both = ["client", "server"];

Package.on_use(function (api, where) {
  api.use([
    "collection-hooks"
  ], both);

  api.add_files([
      "collection-behaviours.js"
  ], both);

  api.export("CollectionBehaviours");
});

Package.on_test(function (api) {
  /*
  api.use([
    "collection-behaviours",
    "underscore",
    "accounts-base",
    "accounts-password",
    "tinytest",
    "test-helpers"
  ], both);
*/
});