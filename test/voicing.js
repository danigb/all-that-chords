vows = require('vows');
assert = require('assert');

Chord = require('../');

vows.describe('voicings').addBatch({
  "voicing": function() {
    assert.deepEqual(Chord("Cm7#5").voicing("left-hand-A"), ['eb2', 'g#2', 'bb2']);
  },
  "alias voicing": function() {
    assert.deepEqual(Chord("C+").voicing('open-A'), ['e2', 'c3', 'g#3']);
  }
}).export(module);
