'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-dux:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: "Dux Test"})
      .toPromise();
  });

  it('creates files', function () {
	  assert.file([
		  'DuxTest/actions.js',
		  'DuxTest/actionTypes.js',
		  'DuxTest/DuxTest.js',
		  'DuxTest/constants.js',
		  'DuxTest/index.js',
		  'DuxTest/model.js',
		  'DuxTest/reducer.js',
		  'DuxTest/components/index.js',
		  'DuxTest/components/DuxTestComponent.js'
	  ]);
  });
});
