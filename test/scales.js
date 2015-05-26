vows = require('vows');
assert = require('assert');

Chord = require('../');

vows.describe('scales').addBatch({
  "scales": function() {
    assert.deepEqual(Chord('C13').scales(), ['C lydian dominant', 'C mixolydian', 'Db diminished']);
    assert.deepEqual(Chord('BbmMaj7').scales(), ['C lydian dominant', 'C mixolydian', 'Db diminished']);
  }
}).export(module);
