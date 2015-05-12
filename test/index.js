vows = require('vows');
assert = require('assert');

var chord = require('../lib');

vows.describe('All that chords').addBatch({
  "find chord": function() {
    assert(typeof(chord("CM")) !== 'undefined');
  },
  "find alias": function() {
    c = chord("CDominant");
    assert.notEqual(c.data.name, c.name);
  },
  "find nothing": function() {
    assert(chord("Cnothig") === null);
  }
}).export(module);
