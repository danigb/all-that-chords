vows = require('vows');
assert = require('assert');

Chord = require('../');

vows.describe('Chord notes').addBatch({
  "notes": function() {
    assert.deepEqual(Chord('CMajor').notes(), ['c2', 'e2', 'g2']);
    assert.deepEqual(Chord('C', 'Major').notes(), ['c2', 'e2', 'g2']);
  }
}).export(module);
