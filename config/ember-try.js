/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'ember-1.11',
      bower: {
        dependencies: {
          'ember': '~1.11.0'
        },
        resolutions: {
          'ember': '~1.11.0'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null,
          'ember-disable-prototype-extensions': null
        }
      }
    }
  ]
};
