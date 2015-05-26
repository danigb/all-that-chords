vows = require('vows');
assert = require('assert');

Chord = require('../');

vows.describe('Chord constructor').addBatch({
  "Simple": function() {
    assert.deepEqual(Chord("CM").root, "C");
    assert.deepEqual(Chord("CM").name, "M");
    assert.deepEqual(Chord("CM").intervals, ['P1', 'M3', 'P5']);
  },
  "Alias": function() {
    assert.deepEqual(Chord("CDominant").intervals, [ 'P1', 'M3', 'P5', 'm7' ]);
  }
}).export(module);
