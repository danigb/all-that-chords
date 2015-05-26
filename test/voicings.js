vows = require('vows');
assert = require('assert');

Chord = require('../');

vows.describe('voicings').addBatch({
  "voicings": function() {
    assert.deepEqual(Chord("Cm7#5").voicings(), ['left-hand-A', 'left-hand-B']);
  },
  "alias voicings": function() {
    assert.deepEqual(Chord("C+").voicings(), ['left-hand-A', 'left-hand-B', 'open-A', 'open-B']);
  }
}).export(module);
