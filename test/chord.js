vows = require('vows');
assert = require('assert');

var chord = require('../lib');
var str = require('pitch/note/str');

vows.describe('All that chords').addBatch({
  "chord root": function() {
    c = chord("Cmaj7");
    assert.equal(str(c.root), 'c4');
  },
  "find notes": function() {
    c = chord("Cmaj7");
    assert.equal(c.notes().map(str), ['c4', 'e4', 'g4', 'b4']);
  }
}).export(module);
