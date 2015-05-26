vows = require('vows');
assert = require('assert');

Chord = require('../');

vows.describe('ATC detect').addBatch({
  "detect chord": function() {
    chord = Chord.detect("C", "c g");
    assert.equal(chord.toString(), 'C5');
  }
}).export(module);
