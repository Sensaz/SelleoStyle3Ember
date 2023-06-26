'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    svg: {
      paths: ['public/images'],
    },
  });

  return app.toTree();
};
