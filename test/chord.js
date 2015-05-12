vows = require('vows');
assert = require('assert');

var chord = require('../lib');
var str = require('pitch/note/str');

vows.describe('All that chords').addBatch({
  "chord root": function() {
    c = chord("Cmaj7");
    assert.equal(str(c.root), 'c4');
  },
  "notes": function() {
    c = chord("Cmaj7");
    assert.deepEqual(c.notes().map(str), ['c4', 'e4', 'g4', 'b4']);
  },
  "voicings": function() {
    c = chord("Cmaj7");
    assert.deepEqual(c.voicings(), ['left-hand-A', 'left-hand-B', 'left-hand-C', 'two-hand-A', 'two-hand-B', 'two-hand-C']);
  },
  "voicing": function() {
    c = chord("Cmaj7");
    assert.deepEqual(c.voicing('left-hand-A').map(str), ['e4', 'g4', 'b4']);
    assert.deepEqual(c.voicing('left-hand-C').map(str), ['g4', 'b4', 'e5']);
  }
}).export(module);
